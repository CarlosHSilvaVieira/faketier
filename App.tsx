import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/styles/base/theme';
import {AuthRoutes} from './src/routes/auth.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const colorScheme = useColorScheme() || 'light';

  return (
    <ThemeProvider theme={theme[colorScheme]}>
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
