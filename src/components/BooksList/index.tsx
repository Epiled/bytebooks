import { Book } from "../../store/reducers/books";
import BookItem from "../BookItem";

const BookList = ({items}: {items: Book[]}) => (
  <>
    {items.map((item, index) => (
      <BookItem key={index} book={item} />
    ))}
  </>
)

export default BookList;