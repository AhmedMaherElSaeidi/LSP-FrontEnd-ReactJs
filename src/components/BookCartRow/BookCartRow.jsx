import { RxDotFilled } from "react-icons/rx";
import BookCart from "../BookCart/BookCart";
import "./BookCartRow.css"

const BookCartRow = ({ bookID, isbn, rackNumber, title, description, author, category, cover, remove}) => {
  return (
    <section className="cart-row">
      <BookCart bookID={bookID} isbn={isbn} title={title} author={author} cover={cover} remove={(id) => remove(id)}/>
      <section className="book-details text-white">
        <section className="mb-1">{description}</section>
        <section className="mb-1">
          <span className="fw-bold">ISBN</span> {isbn} <RxDotFilled /> <span className="fw-bold">RackNumber</span> {rackNumber} <RxDotFilled /> <span className="fw-bold">{category}</span>
        </section>
        <section className="mb-1">
          <h5>Return date.</h5>
        </section>
        <section className="book-details-bottom-border"></section>
      </section>
    </section>
  );
};

export default BookCartRow;
