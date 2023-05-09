import axios from "axios";
import { useEffect, useState } from "react";
import { SERVER_DOMAIN, SERVER_URL } from "../../core/globals";
import Spinner from "../Spinner/Spinner";
import ErrorModal from "../ErrorModal/ErrorModal";
import { Link, useParams } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import "./BookDetail.css";
import { getUser, getToken } from "../../core/authenication";

const BookDetail = () => {
  let { id } = useParams();
  const [info, setInfo] = useState({
    loading: true,
    book: {},
    err: null,
    changes: null,
    message: null,
  });

  const borrow_book = (book_id) => {
    axios
      .post(
        SERVER_URL + "borrows",
        { user_id: getUser().userID, book_id },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      )
      .then((res) => {
        setInfo({ ...info, message: res.data.message[0].msg, loading: false, changes: !info.changes });
      })
      .catch((err) => {
        setInfo({ ...info, err: err.response.data.message, loading: false });
      });
  };

  useEffect(() => {
    axios
      .get(SERVER_URL + "books/join/book-category-borrow/" + id)
      .then((res) => {
        setInfo({ ...info, book: res.data, loading: false });
      })
      .catch((err) => {
        setInfo({ ...info, err: err.response.data.message, loading: false });
      });
  }, [info.changes]);

  return (
    <section className="Book-detail-page">
      {!info.loading && (
        <section className="horizontal-card">
          <section className="card-cover">
            <img src={SERVER_DOMAIN + info.book.photo} alt="book_cover" />
          </section>
          <section className="card-details text-white">
            <section className="mb-2 fw-bold">
              <h2>{info.book.title}</h2>
              <h4>{info.book.author}</h4>
            </section>
            <section className="mb-1">{info.book.description}</section>
            <section className="mb-1">
              <span className="fw-bold">ISBN</span> {info.book.ISBN} <RxDotFilled /> <span className="fw-bold">RackNumber</span> {info.book.rack_number} <RxDotFilled /> <span className="fw-bold">{info.book.category_book.category}</span>
            </section>
            <section className="card-details-bottom-border mb-2"></section>
            <section className="card-btn">
              <span>
                <Link className="btn btn-info" to="/pages/home">
                  <MdOutlineKeyboardReturn /> Return
                </Link>
              </span>
              {getUser().type == "normal" && info.book && info.book.book_borrow.length == 0 && (
                <span className="btn btn-warning" onClick={() => borrow_book(info.book.book_id)}>
                  Borrow
                </span>
              )}
              {getUser().type == "normal" && info.book && info.book.book_borrow[0] && info.book.book_borrow[0].user_id == getUser().userID && info.book.book_borrow[0].status != 'waiting'&& <Link to={"/pages/cart"}><span className="btn btn-danger">In Cart</span></Link>}
              {getUser().type == "normal" && info.book && info.book.book_borrow[0] && info.book.book_borrow[0].user_id == getUser().userID && info.book.book_borrow[0].status == 'waiting'&& <span className="btn btn-danger">Waiting</span>}
              {getUser().type == "normal" && info.book && info.book.book_borrow.length != 0 && info.book.book_borrow[0].user_id != getUser().userID && <span className="btn btn-light disabled">Not Available</span>}
            </section>
          </section>
        </section>
      )}
      {info.loading && <Spinner />}
      {info.err && <ErrorModal message={info.err} close={(v) => setInfo({ ...info, err: v })} />}
    </section>
  );
};

export default BookDetail;
