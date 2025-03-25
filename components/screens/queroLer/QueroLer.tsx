import React from 'react';
import { View } from 'react-native';
import InputWithButton from '../../inputWithButton/InputWithButton';
import { Titulo } from '../../styles';

const QueroLer: React.FC = () => {
  return (
    <View>
      <Titulo variant='headlineSmall'>Quero ler</Titulo>
      <InputWithButton />
    </View>
  )
};

export default QueroLer;
