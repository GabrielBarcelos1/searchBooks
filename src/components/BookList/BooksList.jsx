import Books from "../Book/Book";
import "./index.css";

function BookList(props) {
  return (
    <div>
      <div className="divBookList">
        {props.arrBooks.map((book, key) => {
          return (
            <Books
              key={key}
              urlImage={
                book.volumeInfo?.imageLinks?.smallThumbnail ||
                book.urlImage ||
                "../images/not-found.png"
              }
              id={book.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookList;
