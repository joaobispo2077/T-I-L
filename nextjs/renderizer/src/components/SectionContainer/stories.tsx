import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionContainer, SectionContainerProps } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
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
  },
} as Meta;

export const Template: Story<SectionContainerProps> = (args) => {
  return <SectionContainer {...args} />;
};
