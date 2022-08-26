import React from 'react'
import { AvatarContainer, AvatarImage } from './styles'

export const Avatar = () => {

    return (
        <AvatarContainer>
            <AvatarImage source={{ uri: 'https://reactnative.dev/img/tiny_logo.png', }} />
        </AvatarContainer>
    )
}