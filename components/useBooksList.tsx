import { useState } from 'react';

export function useBooksList() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookList, setBookList] = useState<string[]>([]);

  const adicionarLivro = () => {
    if (bookTitle.trim() === '') return;
    setBookList([...bookList, bookTitle]);
    setBookTitle('');
  };

  return {
    bookTitle,
    setBookTitle,
    bookList,
    adicionarLivro,
  };
}
