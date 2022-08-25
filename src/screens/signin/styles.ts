import styled from 'styled-components/native'
import FakkiterLogo from '../../assets/icon/fakkiter-icon.svg'
import CreateAccountIcon from '../../assets/icon/create-account-icon.svg'
import { rgba } from 'polished'

export const SignInContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => rgba(theme.primary.color, 0.8)};
`

export const Brand = styled.View``

export const Form = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 40px;
`

export const SignUpButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 20px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SignUpButtonIcon = styled(CreateAccountIcon).attrs(
  ({ theme }) => ({
    fill: theme.secondary.text
  })
)`
  margin-right: 10px;
`

export const Logo = styled(FakkiterLogo).attrs(({ theme }) => ({
  fill: theme.primary.text
}))`
  height: 50px;
  width: 50px;
`;

export const SignUpButtonText = styled.Text`
  color: ${({ theme }) => theme.secondary.text};
`
