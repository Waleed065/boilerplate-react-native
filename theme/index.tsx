import React from 'react';
import colors from './colors';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

interface schema {
  children: JSX.Element;
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    colors,
  },
};

export default function ThemeConfig({children}: schema) {
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
}
