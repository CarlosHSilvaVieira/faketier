import React from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components'
import { useAuth } from '../context/auth'
import { AppRoutes } from './app.routers'
import { AuthRoutes } from './auth.routes'

export const routes = {
  SIGNIN: 'SignIn',
  SIGNUP: 'SignUp',
  HOME: 'Home'
}

const Loader = () => {
  const theme = useTheme()
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={'large'} color={theme.primary.text} />
    </SafeAreaView>
  )
}

export const Router = () => {
  // const { user, loading } = useAuth()
  // if (loading) {return <Loader />}
  // if (!user) {return <AuthRoutes />}

  return <AppRoutes />
}
