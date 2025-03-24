import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import Lendo from '../screens/lendo';
import Lidos from '../screens/lidos';
import QueroLer from '../screens/QueroLer';


const BottomNavigationBar: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'lendo', title: 'Lendo', icon: 'book-open-page-variant' },
    { key: 'lidos', title: 'Lidos', icon: 'check' },
    { key: 'queroLer', title: 'Quero ler', icon: 'lightbulb' },
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
