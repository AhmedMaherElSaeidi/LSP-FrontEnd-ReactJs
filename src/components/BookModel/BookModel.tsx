import { Link } from "react-router-dom";
import { VscOpenPreview } from "react-icons/vsc";
import { BsTrashFill } from "react-icons/bs";
import { SiAddthis } from "react-icons/si";
import { MdDoneAll } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { HiBan } from "react-icons/hi";
import "./BookModel.css";

interface BookModelProps {
  isbn: string;
  rackNumber: number;
  title: string;
  author: string;
  category: string;
  cover: string;
  booker?: object;
  remove: (id: string) => void;
}
const BookModel = ({ isbn, rackNumber, title, author, category, cover, booker, remove }: BookModelProps) => {
  return (
    <section className="book-model">
      <img src={cover} alt="Book_Cover" />
      <section className="model-cover text-white">
        <h5 className="mb-1">{title}</h5>
        <p className="model-text">{author}</p>
        <p className="model-text">{category}</p>
      </section>
      <section className="model-content">
        <section className="model-content-heading text-lightblue">
          <h5 className="model-title mb-0">ISBN {isbn}</h5>
          <p className="model-text">Rack {rackNumber}</p>
        </section>
        <section className="model-content-icons text-lightblue">
          {/* 
          <HiBan className="fs-3 content-icon" title="Not Available" />
        <MdDoneAll className="fs-3 content-icon" title="In Cart" /> */}
          <Link className="text-lightblue content-icon" to={"/pages/home/book/" + isbn}>
            <SiAddthis className="fs-3" title="Add Book" />
          </Link>
          <Link className="text-lightblue content-icon" to={"/pages/home/book/" + isbn}>
            <VscOpenPreview className="fs-3" title="View book" />
          </Link>
        </section>
      </section>
      <span className="edit-icon">
        <Link className="text-lightblue" to={"/pages/options/update-book/" + isbn}>
          <FiEdit />
        </Link>
      </span>
      <span className="trash-icon text-lightblue">
        <BsTrashFill onClick={() => remove(isbn)} />
      </span>
    </section>
  );
};

export default BookModel;
