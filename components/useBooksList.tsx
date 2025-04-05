import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export function useBooksList(storageKey: string) {
  const [bookTitle, setBookTitle] = useState('');
  const [bookList, setBookList] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const data = await AsyncStorage.getItem(storageKey);
        if (data) {
          setBookList(JSON.parse(data));
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setIsLoaded(true);
      }
    };

    carregarDados();
  }, [storageKey]);

  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem(storageKey, JSON.stringify(bookList)).catch(err =>
        console.error('Erro ao salvar dados:', err),
      );
    }
  }, [bookList, isLoaded, storageKey]);

  const addBook = () => {
    if (bookTitle.trim() === '') return;
    setBookList([...bookList, bookTitle]);
    setBookTitle('');
  };

  const removeBook = (indexToRemoveBook: number) => {
    const newBookList = bookList.filter(
      (_, index) => index !== indexToRemoveBook,
    );
    setBookList(newBookList);
  };

  return {
    bookTitle,
    setBookTitle,
    bookList,
    addBook,
    removeBook,
  };
}
