import { Link } from "react-router-dom";
import { VscOpenPreview } from "react-icons/vsc";
import { BsTrashFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import "./BookModel.css";

const BookModel = ({ isbn, rackNumber, title, author, category, cover, remove }) => {
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
          <Link className="text-lightblue content-icon" to={"/pages/home/book/" + isbn}>
            <VscOpenPreview className="fs-2" title="View book" />
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
