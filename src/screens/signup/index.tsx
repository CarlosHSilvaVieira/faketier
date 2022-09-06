import React, { useCallback, useState } from 'react'
import {
  Alert,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup'

import {
  SignUpContainer,
  Title,
  Logo,
  Heading,
  Brand,
  Form,
  SignInButton,
  SignInButtonIcon,
  SignInButtonText,
  styles
} from './styles'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import { register } from '../../services/auth'

interface SignUpForm {
  [key: string]: string;
}

const validator = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  username: Yup.string().required('UserName is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
})

export const SignUp = () => {
  const background = require('../../assets/img/fake-2.jpg')

  const [loading, setLoading] = useState(false)

  const { navigate } = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(validator) })

  const handleSignUp = useCallback(async ({ email, name, password, username }: SignUpForm) => {
    try {
      setLoading(true)
      await register({ email, name, password, username })
      setLoading(false)
      Alert.alert('Certin!', 'Seu cadastro foi feito com sucesso', [
        {
          text: 'Ir para login',
          onPress: () => navigate('SignIn'),
        },
      ]);
    } catch {
      Alert.alert('Ops!', 'parece que algo não saiu como esperado, tente novamente', [{
        text: 'ok',
      }])
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.image}>
        <SignUpContainer>
          <Brand>
            <Logo width={80} height={80} />
          </Brand>
          <Heading>
            <Title>Sign up!</Title>
          </Heading>
          <Form>
            <Input
              control={control}
              name="name"
              error={errors?.name && errors.name?.message}
              placeholder="Name"
              maxLength={50}
              keyboardType="default"
              returnKeyType="next"
            />
            <Input
              control={control}
              name="username"
              error={errors?.username && errors.username?.message}
              placeholder="Username"
              autoCapitalize="none"
              returnKeyType='next'
            />
            <Input
              control={control}
              name="email"
              error={errors?.email && errors.email?.message}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType='next'
            />
            <Input
              control={control}
              name="password"
              error={errors?.password && errors.password?.message}
              placeholder="Password"
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry
            />
            <Button text="Register" loading={loading} onPress={handleSubmit(handleSignUp)} />
            <SignInButton onPress={() => navigate('SignIn')}>
              <SignInButtonIcon />
              <SignInButtonText>Back</SignInButtonText>
            </SignInButton>
          </Form>
        </SignUpContainer>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}
