import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const ScreenContainer = styled(SafeAreaView)`
  flex: 1;
  padding: 0px 2px;
  background-color: ${({ theme }) => theme.primary.colorLight};
`;

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
