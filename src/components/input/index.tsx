import React, { forwardRef } from 'react'
import { TextInputProps } from 'react-native'
import { Container, ErrorText, InputContainer, StyledTextInput } from './styles'
import { Control, Controller } from 'react-hook-form'

export interface InputProps extends TextInputProps {
  containerStyles?: any
  control: Control
  name: string
  error?: any
}

export interface StyledInputProps extends TextInputProps {
  containerStyles?: any
}

const StyledInput = ({ containerStyles, ...rest }: StyledInputProps) => (
  <InputContainer style={containerStyles ?? {}}>
    <StyledTextInput {...rest} />
  </InputContainer>
)

export const Input = ({ control, name, error, ...rest }: InputProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <StyledInput onChangeText={onChange} value={value} {...rest} />
        )}
      />
      { error && <ErrorText>{error}</ErrorText> }
    </Container>
  )
}
