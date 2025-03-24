import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const HomeRoute = () => <Text style={{ marginTop: 200, textAlign: 'center' }}>🏠 Página Inicial</Text>;
const BooksRoute = () => <Text style={{ marginTop: 200, textAlign: 'center' }}>📚 Seus livros</Text>;
const ProfileRoute = () => <Text style={{ marginTop: 200, textAlign: 'center' }}>👤 Seu perfil</Text>;

const BottomNavigationBar: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'home', title: 'Início', icon: 'home' },
    { key: 'books', title: 'Livros', icon: 'book' },
    { key: 'profile', title: 'Perfil', icon: 'account' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    books: BooksRoute,
    profile: ProfileRoute,
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
