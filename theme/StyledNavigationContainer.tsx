import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import colors from './colors';

interface schema {
  children: JSX.Element | JSX.Element[];
}

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
};

export default function StyledNavigationContainer({children}: schema) {
  return <NavigationContainer theme={theme}>{children}</NavigationContainer>;
}
