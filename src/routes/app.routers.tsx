import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/home'
import { routes } from '.'

export type AppScreens = {
    Home: undefined
}

export const AppRoutes = () => {
    const AppStack = createBottomTabNavigator()
    
    return (
        <AppStack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppStack.Screen name={routes.HOME} component={Home} />
        </AppStack.Navigator>
    )
}
