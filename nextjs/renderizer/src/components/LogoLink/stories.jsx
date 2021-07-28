import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'testing',
    src: 'assets/images/logo.svg',
    link: 'http://localhost:6006',
  },
  argTypes: {
    link: { type: 'string' },
    text: { type: 'string' },
    src: { type: 'string' },
  },
};

export const WithImage = (args) => {
  return <LogoLink {...args} />;
};

export const OnlyText = (args) => {
  return <LogoLink {...args} />;
};

OnlyText.args = {
  src: '',
};
