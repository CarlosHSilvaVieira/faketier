import React, { useState } from 'react'
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native'
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

export const SignUp = () => {
  const background = require('../../assets/img/fake-1.jpg')

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

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
            />
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              autoCapitalize="none"
              keyboardType="default"
              secureTextEntry
            />
            <Button text="Register" loading={loading} onPress={() => {}} />
            <SignInButton onPress={() => {}}>
              <SignInButtonIcon />
              <SignInButtonText>Back</SignInButtonText>
            </SignInButton>
          </Form>
        </SignUpContainer>
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
}
