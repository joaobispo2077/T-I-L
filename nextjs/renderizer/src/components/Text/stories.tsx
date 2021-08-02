import { Meta, Story } from '@storybook/react/types-6-0';
import { Text, TextProps } from '.';

export default {
  title: 'Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis soluta aliquid tempora magnam deleniti, consectetur nostrum aperiam similique deserunt non recusandae nemo eligendi fugit iure voluptatum facilis assumenda! Quas, repudiandae.',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextProps> = (args) => {
  return <Text {...args} />;
};
