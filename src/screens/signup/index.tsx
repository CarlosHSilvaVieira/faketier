import React from 'react';
import {ImageBackground, TextInput, View} from 'react-native';
import {SignUpContainer, Title, styles} from './styles';

export const SignUp = () => {
  const background = require('../../assets/img/fake-1.jpg');

  return (
    <ImageBackground
      resizeMode="cover"
      source={background}
      style={styles.image}>
      <SignUpContainer>
        <Title>Hello world!</Title>
        <View>
          <TextInput placeholder="awdawdawdw" />
        </View>
      </SignUpContainer>
    </ImageBackground>
  );
};
