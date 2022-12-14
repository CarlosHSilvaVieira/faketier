import React from 'react'
import { useColorScheme, StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/styles/base/theme'
import { Router } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { AuthProvider } from './src/context/auth'
import Ionicons from 'react-native-vector-icons/Ionicons'

Ionicons.loadFont().then()

export default function App() {
  const colorScheme = useColorScheme() || 'light'

  return (
    <AuthProvider>
      <ThemeProvider theme={theme[colorScheme]}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      </ThemeProvider>
    </AuthProvider>
  )
}
