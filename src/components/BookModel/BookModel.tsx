import { BsTrashFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import "./BookModel.css";

interface BookModelProps {
  isbn: string;
  rackNumber: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  booker?: object;
}
const BookModel = ({ isbn, rackNumber, title, author, category, cover, booker }: BookModelProps) => {
  return (
    <section className="book-card">
      <img src={cover} alt="Book_Cover" />
      <section className="card-cover text-gold">
        <h5 className="mb-1">{title}</h5>
        <p className="card-text">{author}</p>
        <p className="card-text">{category}</p>
      </section>
      <section className="card-content text-gold">
        <section>
          <h5 className="card-title mb-0">ISBN {isbn}</h5>
          <p className="card-text">Rack {rackNumber}</p>
          <SiAddthis className="fs-3 add-icon" title="Borrow book"/>
        </section>
      </section>
      <span className="edit-icon text-gold">
        <FiEdit />
      </span>
      <span className="trash-icon text-gold">
        <BsTrashFill />
      </span>
    </section>
  );
};

export default BookModel;
