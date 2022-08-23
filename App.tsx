import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/styles/base/theme';
import {SignUp} from './src/screens/signup';

export default function App() {
  const colorScheme = useColorScheme() || 'light';

  return (
    <ThemeProvider theme={theme[colorScheme]}>
      <SignUp />
    </ThemeProvider>
  );
}
