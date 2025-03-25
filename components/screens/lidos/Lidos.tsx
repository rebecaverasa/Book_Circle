import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import InputWithButton from '../../inputWithButton/InputWithButton';
import { Titulo } from '../../styles';

const Lidos: React.FC = () => {
  return (
    <View>
      <Titulo variant='headlineSmall'>Lidos</Titulo>
      <InputWithButton />
    </View>
  );
};

export default Lidos;
