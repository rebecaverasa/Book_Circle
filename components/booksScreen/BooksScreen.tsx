import React from 'react';
import { IconButton, List, Text } from 'react-native-paper';
import { useBooksList } from '../useBooksList';
import { Container, ScrollArea } from './styles';
import { Titulo } from '../styles';
import InputWithButton from '../inputWithButton/InputWithButton';

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
            title={({ color, fontSize }) => (
              <Text
                style={{
                  fontSize,
                  color,
                  marginVertical: 2,
                  margin: 0,
                }}
              >
                {book}
              </Text>
            )}
            right={props => (
              <IconButton
                {...props}
                icon="delete"
                size={18}
                style={{ margin: 0 }}
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
