import { ThemeProvider } from 'styled-components';
import { themes } from '.';

export const renderTheme = (children) => {
  return (
    <ThemeProvider theme={{ ...themes['default'] }}>{children}</ThemeProvider>
  );
};
