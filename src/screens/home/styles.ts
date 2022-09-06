import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 2px;
  background-color: ${({ theme }) => theme.primary.colorLight};
`

export const ListContainer = styled.View`
  margin: 10px;
`
export const HeaderContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  margin: 0px 20px;
`

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0px 15px 0px;
`

export const UserContent = styled.View`
  margin-left: 20px;
`
export const Form = styled.View`
  background-color: orangered;
  padding: 10px;
  margin-top: 10px;
`;

export const styles = StyleSheet.create({
  inputContainer: {
    height: 52,
    with: 52,
    borderRadius: 52/2,
    padding: 50,
    margin: 0,
    border: 'none'
  }
});