import styled from 'styled-components/native';

export const FakitterContainer = styled.View`
  padding: 15px;
  flex-flow: row;
  justify-content: center;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.secondary.text};
`;

export const FakitterContent = styled.View`
  padding: 10px 20px;
  flex: 1;
`;

export const Header = styled.View`
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Author = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const Username = styled.Text`
  font-size: 12px;
  font-style: italic;
`;

export const Text = styled.Text`
  text-align: justify;
  line-height: 20px;
`;
