import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home } from '../screens/home'
import { routes } from '.'
import { ParamListBase, RouteProp } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { Profile } from '../screens/profile'

export type AppScreens = {
  Home: undefined
}

const IconBar = ({
  focused,
  color,
  size,
  route
}: {
  focused: boolean
  color: string
  size: number
  route: RouteProp<ParamListBase, string>
}) => {
  const [iconName, setIconName] = useState('')

  const getIconName = (focused: boolean, route: string) => {
    if (route === 'Home') {
      return focused ? 'home' : 'home-outline'
    } else if (route === 'User') {
      return focused ? 'person-circle' : 'person-circle-outline'
    }

    return ''
  }

  useEffect(() => {
    setIconName(getIconName(focused, route.name))
  }, [route])

  return <Ionicons size={size} color={color} name={iconName} />
}

export const AppRoutes = () => {
  const AppStack = createBottomTabNavigator()
    const theme  = useTheme()


  return (
    <AppStack.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: (props) => (
          <IconBar route={route} {...props} />
        ),
        tabBarActiveTintColor: theme.primary.colorDark,
        tabBarInactiveTintColor: 'gray',
      })}>

      <AppStack.Screen name={routes.PROFILE} component={Profile} />
      <AppStack.Screen name={routes.HOME} component={Home} />
    </AppStack.Navigator>
  )
}
