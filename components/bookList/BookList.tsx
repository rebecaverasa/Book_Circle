import { List } from 'react-native-paper';

type Props = {
  books: string[];
};

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <>
      {books.map((book, index) => (
        <List.Item key={index} title={book} />
      ))}
    </>
  );
};

export default BookList;
