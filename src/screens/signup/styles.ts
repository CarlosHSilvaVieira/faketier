import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import GoBackIcon from '../../assets/icon/go-back-icon.svg'
import FakkiterLogo from '../../assets/icon/fakkiter-icon.svg'
import { SafeAreaView } from 'react-native-safe-area-context';
import { rgba } from 'polished';

export const SignUpContainer = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => rgba(theme.primary.colorLight, 0.4)};
`;

export const Heading = styled.View`
  box-sizing: border-box;
  height: 100px;
  width: 100%;
  padding: 0 40px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.primary.text};
  font-size: 20px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 16px;
  box-sizing: border-box;
  text-align: center;
`;

export const Brand = styled.View``;

export const Form = styled.View`
  width: 100%;
  padding: 0 40px;
`;

export const SignInButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SignInButtonText = styled.Text`
  color: ${({ theme }) => theme.primary.text};
`;


export const Logo = styled(FakkiterLogo).attrs(({ theme }) => ({
  fill: theme.primary.text,
}))`
`;

export const SignInButtonIcon = styled(GoBackIcon).attrs(({ theme }) => ({
  fill: theme.primary.text,
}))`
  margin-right: 10px;
`


export const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
