import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<p><a href="https://www.linkedin.com/in/joaobispo2077/">Feito com ❤ por João Bispo</a></p>`,
  },
};

export const Template = (args) => {
  return <Footer {...args} />;
};
