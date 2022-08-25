import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { routes } from './index'
import { SignIn } from '../screens/signin'
import { SignUp } from '../screens/signup'

export type AuthScreens = {
    SignIn: undefined,
    SignUp: undefined,
}

export const AuthRoutes = () => {

    const Auth = createStackNavigator()

    return (
        <Auth.Navigator 
            screenOptions={{
                headerShown: false,
            }}
        >
            <Auth.Screen name={routes.SIGNIN} component={SignIn} />
            <Auth.Screen name={routes.SIGNUP} component={SignUp} />
        </Auth.Navigator>
    )
}
