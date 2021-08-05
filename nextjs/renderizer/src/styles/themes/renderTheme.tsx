import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '.';

export const renderTheme = (children: React.ReactNode) => {
  return (
    <ThemeProvider theme={{ ...themes.default }}>{children}</ThemeProvider>
  );
};
