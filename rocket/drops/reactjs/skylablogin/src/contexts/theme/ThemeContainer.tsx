import React from 'react';

import { ThemeProvider as ChakraThemeProvider } from '@chakra-ui/core';

const ThemeContainer: React.FC = () => {
  return <ChakraThemeProvider></ChakraThemeProvider>;
};

export default ThemeContainer;
