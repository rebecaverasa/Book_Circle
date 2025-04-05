import { View } from 'react-native';
import { Titulo } from './styles';
import InputWithButton from './inputWithButton/InputWithButton';
import BookList from './bookList/BookList';
import { useBooksList } from './useBooksList';

type Props = {
  titulo: string;
};

const BooksScreen: React.FC<Props> = ({ titulo }) => {
  const { bookTitle, setBookTitle, bookList, addBook, removeBook } =
    useBooksList();

  return (
    <View>
      <Titulo variant="headlineSmall">{titulo}</Titulo>
      <InputWithButton
        bookTitle={bookTitle}
        setBookTitle={setBookTitle}
        onAdd={addBook}
      />
      <BookList books={bookList} removeBook={removeBook} />
    </View>
  );
};

export default BooksScreen;
