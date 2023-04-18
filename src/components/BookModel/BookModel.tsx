import { BsTrashFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { FiEdit } from "react-icons/fi";
import "./BookModel.css";
import { Link } from "react-router-dom";

interface BookModelProps {
  isbn: string;
  rackNumber: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  booker?: object;
  remove: (id:string) => void;
}
const BookModel = ({ isbn, rackNumber, title, author, category, cover, booker, remove }: BookModelProps) => {
  return (
    <section className="book-model">
      <img src={cover} alt="Book_Cover" />
      <section className="model-cover text-gold">
        <h5 className="mb-1">{title}</h5>
        <p className="model-text">{author}</p>
        <p className="model-text">{category}</p>
      </section>
      <section className="model-content text-gold">
        <section>
          <h5 className="model-title mb-0">ISBN {isbn}</h5>
          <p className="model-text">Rack {rackNumber}</p>
          <SiAddthis className="fs-3 add-icon" title="Borrow book"/>
        </section>
      </section>
      <span className="edit-icon text-gold">
        <Link to={"/pages/options/update-book/"+ isbn}><FiEdit /></Link>
      </span>
      <span className="trash-icon text-gold">
        <BsTrashFill onClick={() => remove(isbn)}/>
      </span>
    </section>
  );
};

export default BookModel;
