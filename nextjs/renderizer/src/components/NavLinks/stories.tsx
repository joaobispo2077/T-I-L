import { Meta, Story } from '@storybook/react/types-6-0';
import { NavLinks, NavLinksProps } from '.';

import links from './mock';

export default {
  title: 'NavLinks',
  component: NavLinks,
  args: {
    links: links,
  },
} as Meta;

export const Template: Story<NavLinksProps> = (args) => {
  return <NavLinks {...args} />;
};
