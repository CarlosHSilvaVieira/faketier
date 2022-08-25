import React, { useCallback, useState } from 'react'
import {
  Alert,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {
  SignUpContainer,
  BackgroundContainer,
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

export const SignUp = () => {
  const background = require('../../assets/img/fake-1.jpg')

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { navigate } = useNavigation()

  const handleSignUp = useCallback(async () => {
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
  }, [email, name, password, username])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        resizeMode="cover"
        source={background}
        style={styles.image}>
        <SignUpContainer>
          <BackgroundContainer />
          <Brand>
            <Logo width={80} height={80} />
          </Brand>
          <Heading>
            <Title>Sign up!</Title>
          </Heading>
          <Form>
            <Input
              value={name}
              onChangeText={setName}
              placeholder="Name"
              maxLength={50}
              keyboardType="default"
              returnKeyType="next"
            />
            <Input
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              autoCapitalize="none"
              returnKeyType='next'
            />
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType='next'
            />
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry
            />
            <Button text="Register" loading={loading} onPress={() => handleSignUp()} />
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
