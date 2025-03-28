import { Button } from 'react-native-paper';
import { Row, StyledTextInput } from './styles';

type Props = {
  bookTitle: string;
  setBookTitle: (text: string) => void;
  onAdd: () => void;
};

const InputWithButton: React.FC<Props> = ({
  bookTitle,
  setBookTitle,
  onAdd,
}) => {
  return (
    <Row>
      <StyledTextInput
        mode="outlined"
        placeholder="O que você está lendo?"
        value={bookTitle}
        onChangeText={setBookTitle}
      />
      <Button mode="contained" onPress={onAdd}>
        Enviar
      </Button>
    </Row>
  );
};

export default InputWithButton;
