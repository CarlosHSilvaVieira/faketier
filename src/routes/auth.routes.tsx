import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import routes from './routes'
import { SignIn } from '../screens/signin'
import { SignUp } from '../screens/signup'

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
