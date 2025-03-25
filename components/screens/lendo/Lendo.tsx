
import { View } from "react-native";
import InputWithButton from "../../inputWithButton/InputWithButton";
import { Titulo } from "../../styles";


const Lendo: React.FC = () => {
  return (
    <View>
      <Titulo variant='headlineSmall'>Lendo agora</Titulo>
      <InputWithButton />
    </View>
  ); 
};

export default Lendo;
