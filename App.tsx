import * as React from 'react';
import { PaperProvider } from 'react-native-paper';
import BottomNavigationBar from './components/bottomNavigation/BottomNavigationBar';

export default function App() {
  return (
    <PaperProvider>
      <BottomNavigationBar />
    </PaperProvider>
  );
}