import { RxDotFilled } from "react-icons/rx";
import BookCart from "../BookCart/BookCart";
import "./BookCartRow.css"

interface BookCartRowProps {
    isbn: string;
    rackNumber: number;
    title: string;
    author: string;
    category: string;
    cover: string;
    booker?: object;
    remove: (id:string) => void;
}

const BookCartRow = ({ isbn, rackNumber, title, author, category, cover, booker, remove}:BookCartRowProps) => {
  return (
    <section className="cart-row">
      <BookCart isbn={isbn} title={title} author={author} cover={cover} remove={remove}/>
      <section className="book-details text-white">
        <section className="mb-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi beatae sapiente hic, officiis temporibus nihil error aliquid culpa commodi quisquam ullam enim doloribus natus sequi.</section>
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
