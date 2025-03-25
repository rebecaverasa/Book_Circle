import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Lendo from '../screens/lendo/Lendo';
import Lidos from '../screens/lidos/Lidos';
import QueroLer from '../screens/queroLer/QueroLer';


const BottomNavigationBar: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'queroLer', title: 'Quero ler', icon: 'lightbulb' },
    { key: 'lendo', title: 'Lendo', icon: 'book-open-page-variant' },
    { key: 'lidos', title: 'Lidos', icon: 'check' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    lendo: Lendo,
    lidos: Lidos,
    queroLer: QueroLer,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNavigationBar;
