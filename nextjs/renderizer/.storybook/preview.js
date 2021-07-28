import { ThemeProvider } from 'styled-components';
import GloblaStyles from '../src/styles/GloblaStyles';
import { themes } from '../src/styles/themes';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  background: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: themes['default'].colors.light
      },
      {
        name: 'dark',
        value: themes['default'].colors.dark
      }
    ]
  }

}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ ...themes['default'] }}>
      <GloblaStyles />
      <Story />
    </ThemeProvider>
  )
];
