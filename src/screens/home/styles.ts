import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeContainer = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.primary.color};
`

export const ListContainer = styled.View`
  margin: 10px;
`
export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const HeaderContent = styled.View`
  margin-left: 16px;
`
