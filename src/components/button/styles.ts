import styled from 'styled-components/native';

export const BtnContainer = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({theme}) => theme.primary.border};
  padding: 10px 20px;
  border-radius: 5px;
  margin-top: 15px;

  flex-flow: row;
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const ActivityIndicatorView = styled.View`
  margin-left: 10px;
`;
