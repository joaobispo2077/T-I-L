import { Meta, Story } from '@storybook/react/types-6-0';
import { Base, BaseProps } from '.';

import mock from './mock';

export default {
  title: 'Templates/Base',
  component: Base,
  args: mock,
} as Meta;

export const Template: Story<BaseProps> = (args) => {
  return <Base {...args} />;
};
