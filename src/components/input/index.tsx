import React, { forwardRef } from 'react'
import { TextInputProps } from 'react-native'
import { Container, StyledTextInput } from './styles'

export interface InputProps extends TextInputProps {
  containerStyles?: any,
}

export const Input = ({ containerStyles, ...rest }: InputProps) => (
  <Container style={containerStyles ?? {}}>
    <StyledTextInput {...rest} />
  </Container>
)
