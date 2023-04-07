import { BsTrashFill } from "react-icons/bs";
import "./BookModelCart.css";

interface BookModelCartProps {
  cover: string;
  title: string;
  author: string;
}
const BookModelCart = ({ title, author, cover }: BookModelCartProps) => {
  return (
    <section className="book-card">
      <img src={cover} alt="Book_Cover" />
      <section className="card-cover text-gold">
        <h5 className="mb-1">{title}</h5>
        <h6 className="card-title mb-0">{author}</h6>
      </section>
      <section className="card-content">
        <section>
          <span className="trash-icon text-gold" title="Return book">
            <BsTrashFill />
          </span>
        </section>
      </section>
    </section>
  );
};

export default BookModelCart;
