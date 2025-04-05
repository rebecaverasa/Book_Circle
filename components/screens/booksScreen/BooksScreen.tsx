import React from 'react';
import { useBooksList } from '../../useBooksList';
import { Container, ScrollArea } from './styles';
import { Titulo } from '../../styles';
import InputWithButton from '../../inputWithButton/InputWithButton';
import { IconButton, List } from 'react-native-paper';

type Props = {
  titulo: string;
  storageKey: string;
};

const BooksScreen: React.FC<Props> = ({ titulo, storageKey }) => {
  const { bookTitle, setBookTitle, bookList, addBook, removeBook } =
    useBooksList(storageKey);

  return (
    <Container>
      <Titulo variant="headlineSmall">{titulo}</Titulo>

      <InputWithButton
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
        onAdd={addBook}
      />

      <ScrollArea>
        {bookList.map((book, index) => (
          <List.Item
            key={index}
            title={book}
            right={props => (
              <IconButton
                {...props}
                icon="delete"
                onPress={() => removeBook(index)}
              />
            )}
          />
        ))}
      </ScrollArea>
    </Container>
  );
};

export default BooksScreen;
