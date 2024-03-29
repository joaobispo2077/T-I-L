import { SectionBackground } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackgroundProps } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          inventore ullam tempore enim porro aliquam eligendi totam eaque, nemo
          adipisci dolores numquam, maxime quisquam, a nam voluptate similique?
          Sit, tempore.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
    background: { type: 'boolean' },
  },
} as Meta;

export const LightBackground: Story<SectionBackgroundProps> = (args) => {
  return <SectionBackground {...args} />;
};

export const DarkBackground = (args) => {
  return <SectionBackground {...args} />;
};

DarkBackground.args = {
  background: true,
};
