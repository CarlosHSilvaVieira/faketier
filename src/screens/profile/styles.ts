import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

export const ProfileContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 2px;
  background-color: ${({ theme }) => theme.primary.colorLight};
`;


export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px 0px 15px 0px;
  margin: 0px 20px;
`

export const UserContent = styled.View`
    margin-left: 20px;
`
export const Text = styled.Text`
`;

export const Form = styled.View`
    padding: 20px 20px;
`;
