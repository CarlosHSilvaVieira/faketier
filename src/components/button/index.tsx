import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { BtnContainer, BtnText, ActivityIndicatorView } from './styles'

export interface ButtonProps extends TouchableOpacityProps {
  text: string
  loading: boolean
}

export const Button = ({ text, loading, ...rest }: ButtonProps) => {
  return (
    <BtnContainer {...rest}>
      <BtnText>{text}</BtnText>
      {loading && (
        <ActivityIndicatorView>
          <ActivityIndicator
            accessibilityLabel="loading"
            size="small"
            color='#333'
          />
        </ActivityIndicatorView>
      )}
    </BtnContainer>
  )
}
