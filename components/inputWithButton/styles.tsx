import { TextInput } from "react-native-paper"
import styled from "styled-components/native"


export const Row = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
    margin-horizontal: 15px;
    gap: 4px;
`

export const StyledTextInput = styled(TextInput)`
    flex: 1;    
    height: 45px;
`