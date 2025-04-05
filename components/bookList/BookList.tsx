import { View } from 'react-native';
import { Button, IconButton, List } from 'react-native-paper';

type Props = {
  books: string[];
  removeBook: (index: number) => void;
};

const BookList: React.FC<Props> = ({ books, removeBook }) => {
  return (
    <>
      {books.map((book, index) => (
        <List.Item
          key={index}
          title={book}
          right={props => (
            <IconButton
              {...props}
              icon="delete"
              onPress={() => removeBook(index)}
              iconColor="#e53935"
            />
          )}
        />
      ))}
    </>
  );
};

export default BookList;
