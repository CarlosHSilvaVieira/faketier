import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useState } from 'react'
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native'
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
  SignUpButtonText
} from './styles'

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { signIn } = useAuth()
  const { navigate } = useNavigation()
  
    const handleSignIn = useCallback(async () => {
        console.log({ email, password })
        setLoading(true);

      try {
        await signIn({ email, password });

        setLoading(false);
      } catch {
        setLoading(false);

        Alert.alert('Shiiiii!', 'Não foi possível logar', [
          {
            text: 'Tentar novamente',
          },
        ]);
      }
    }, [email, password, signIn])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SignInContainer>
        <Brand>
          <Logo />
        </Brand>
        <Form>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            maxLength={50}
            keyboardType="default"
            returnKeyType="next"
            autoCapitalize="none"
          />
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            autoCapitalize="none"
            keyboardType="default"
            secureTextEntry
          />
          <Button text="Login" loading={loading} onPress={() => handleSignIn()} />
          <SignUpButton onPress={() => navigate('SignUp')}>
            <SignUpButtonIcon />
            <SignUpButtonText>Sign Up</SignUpButtonText>
          </SignUpButton>
        </Form>
      </SignInContainer>
    </TouchableWithoutFeedback>
  )
}
