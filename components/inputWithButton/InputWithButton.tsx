import { Button } from "react-native-paper";
import { Row, StyledTextInput } from "./styles";

const InputWithButton: React.FC = () => {
    return (
        <Row>
            <StyledTextInput
                mode="outlined"
                placeholder="O que você esta lendo?"
            />
            <Button mode="contained" onPress={() => console.log('Pressed')}>
                Enviar
            </Button>
      </Row>
    )
}

export default InputWithButton;