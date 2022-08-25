import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/home'
import { routes } from '.'

export type AppScreens = {
    Home: undefined
}

export const AppRoutes = () => {
    const AppStack = createStackNavigator()
    
    return (
        <AppStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <AppStack.Screen name={routes.HOME} component={Home} />
        </AppStack.Navigator>
    )
}
