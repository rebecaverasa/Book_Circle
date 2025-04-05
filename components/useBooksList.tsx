import { useState } from 'react';

export function useBooksList() {
  const [bookTitle, setBookTitle] = useState('');
  const [bookList, setBookList] = useState<string[]>([]);

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
