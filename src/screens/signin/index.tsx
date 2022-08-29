import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Alert,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import * as Yup from 'yup'

import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { useAuth } from '../../context/auth'
import {
  Brand,
  Form,
  Logo,
  SignInContainer,
  SignUpButton,
  SignUpButtonIcon,
  SignUpButtonText,
  styles
} from './styles'

interface LoginForm {
  [key: string]: string;
}

const validator = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
})


export const SignIn = () => {
  const background = require('../../assets/img/fake-2.jpg')

  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()
  const { navigate } = useNavigation()
  const { control, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(validator) })

  const handleSignIn = useCallback(async ({ email, password }: LoginForm) => {
    setLoading(true)
    try {
      await signIn({ email, password })

      setLoading(false)
    } catch {
      setLoading(false)

      Alert.alert('Shiiiii!', 'Não foi possível logar', [
        {
          text: 'Tentar novamente'
        }
      ])
    }
  }, [signIn])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.image}>
        <SignInContainer>
          <Brand>
            <Logo />
          </Brand>
          <Form>
            <Input
              control={control}
              name="email"
              placeholder="Email"
              maxLength={50}
              keyboardType="default"
              returnKeyType="next"
              autoCapitalize="none"
              error={errors.email && errors.email?.message}
            />
            <Input
              control={control}
              name="password"
              placeholder="Password"
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry
              error={errors.password && errors.password?.message}
            />
            <Button
              text="Login"
              loading={loading}
              onPress={handleSubmit(handleSignIn)}
            />
            <SignUpButton onPress={() => navigate('SignUp')}>
              <SignUpButtonIcon />
              <SignUpButtonText>Sign Up</SignUpButtonText>
            </SignUpButton>
          </Form>
        </SignInContainer>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}
