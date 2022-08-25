import React from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/base/theme'
import { Router } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/context/auth'

export default function App() {
  const colorScheme = useColorScheme() || 'light'

  return (
    <AuthProvider>
      <ThemeProvider theme={theme[colorScheme]}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  )
}
