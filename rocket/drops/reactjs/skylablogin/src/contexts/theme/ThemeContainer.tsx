import React from 'react';

import {
  ColorModeProvider,
  CSSReset,
  ThemeProvider as ChakraThemeProvider,
} from '@chakra-ui/core';
import theme from '../../styles/theme';

import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

const ThemeContainer: React.FC = ({ children }) => {
  return (
    <ChakraThemeProvider theme={theme}>
      <ColorModeProvider value="dark">
        <EmotionThemeProvider theme={theme}>
          <CSSReset />
          {children}
        </EmotionThemeProvider>
      </ColorModeProvider>
    </ChakraThemeProvider>
  );
};

export default ThemeContainer;
