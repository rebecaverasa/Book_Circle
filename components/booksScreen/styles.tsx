import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  padding: 8px;
`;

export const ScrollArea = styled(ScrollView).attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 40,
  },
}))``;
`
  border-width: 1px;
  border-color: blue;
`;
