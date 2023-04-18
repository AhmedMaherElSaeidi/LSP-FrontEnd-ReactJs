import { Link, useParams } from "react-router-dom";
import data from "../../core/services";
import BookCart from "../BookCart/BookCart";
import "./BookDetail.css";
import { RxDotFilled } from "react-icons/rx";

const BookDetail = () => {
  let { id } = useParams();
  const book = data.filter((obj) => obj.isbn == id)[0];

  return (
    <section className="Book-detail-page">
      <section className="horizontal-card">
        <section className="card-cover">
          <img src={book.cover} alt="book_cover" />
        </section>
        <section className="card-details text-white">
          <section className="mb-2 fw-bold">
            <h2>{book.title}</h2>
            <h4>{book.author}</h4>
          </section>
          <section className="mb-1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi beatae sapiente hic, officiis temporibus nihil error aliquid culpa commodi quisquam ullam enim doloribus natus sequi.Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Excepturi beatae sapiente hic, officiis temporibus nihil error aliquid culpa commodi quisquam ullam enim doloribus natus sequi.
          </section>
          <section className="mb-1">
            <span className="fw-bold">ISBN</span> {book.isbn} <RxDotFilled /> <span className="fw-bold">RackNumber</span> {book.rackNumber} <RxDotFilled /> <span className="fw-bold">{book.category}</span>
          </section>
          <section className="card-details-bottom-border mb-2"></section>
          <section className="card-btn">
            <span>
              <Link className="btn btn-info" to="/pages/home">
                Return
              </Link>
            </span>
            <span className="btn btn-warning">Borrow</span>
            <span className="btn btn-danger">In Cart</span>
            <span className="btn btn-primary">Return</span>
            <span className="btn btn-light disabled">Not Available</span>
          </section>
        </section>
      </section>
    </section>
  );
};

export default BookDetail;
