import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAuth } from '../../context/auth'

export const Home = () => {
    const { logout } = useAuth()
    
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => logout()}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
