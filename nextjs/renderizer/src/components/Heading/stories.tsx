import { Heading, HeadingProps } from './index';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
    darken: true,
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta;

export const Dark: Story<HeadingProps> = (args) => (
  <Heading {...args} darken={true} />
);

export const Light: Story<HeadingProps> = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'dark',
  },
};

Light.args = {
  children: 'O texto está claro',
  darken: false,
};
