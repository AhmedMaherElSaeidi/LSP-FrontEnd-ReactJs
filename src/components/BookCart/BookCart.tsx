import { BsTrashFill } from "react-icons/bs";
import "./BookCart.css";

interface BookCartProps {
  isbn: string;
  cover: string;
  title: string;
  author: string;
  remove: (id:string) => void;
}
const BookCart = ({ isbn, title, author, cover, remove }: BookCartProps) => {
  return (
    <section className="book-cart">
      <img src={cover} alt="Book_Cover" />
      <section className="cart-cover text-gold">
        <h5 className="mb-1">{title}</h5>
        <h6 className="cart-title mb-0">{author}</h6>
      </section>
      <section className="cart-content">
        <section>
          <span className="trash-icon text-gold" title="Return book" onClick={() => remove(isbn)}>
            <BsTrashFill />
          </span>
        </section>
      </section>
    </section>
  );
};

export default BookCart;
