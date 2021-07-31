import { Footer, FooterProps } from '.';
import { Meta, Story } from '@storybook/react/types-6-0';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://www.linkedin.com/in/joaobispo2077/">Feito com ❤ por João Bispo</a></p>`,
  },
} as Meta;

export const Template: Story<FooterProps> = (args) => {
  return <Footer {...args} />;
};
