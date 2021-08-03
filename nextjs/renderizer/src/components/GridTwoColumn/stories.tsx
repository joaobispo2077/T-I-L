import { Meta, Story } from '@storybook/react/types-6-0';
import { GridTwoColumn, GridTwoColumnProps } from '.';
import mockGridTwoColumn from './mock';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: mockGridTwoColumn,
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<GridTwoColumnProps> = (args) => {
  return <GridTwoColumn {...args} />;
};
