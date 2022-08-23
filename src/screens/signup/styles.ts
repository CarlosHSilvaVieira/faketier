import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const SignUpContainer = styled.View`
  flex: 1;
  align-items: center;
  box-sizing: border-box;
  padding: 50px 20px;
  justify-content: flex-start;
  position: relative;
  background-color: ${({theme}) => theme.primary.colorLight};
  opacity: 0.4;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.primary.text};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 16px;
  box-sizing: border-box;

  position: absolute;
  top: 20%;
`;

export const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
