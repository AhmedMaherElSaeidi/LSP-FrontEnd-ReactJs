import { useRef } from "react";
import { GiOpenBook } from "react-icons/gi";
import FormCreateBook from "../Form/FormCreateBook/FormCreateBook";
import default_book from "../../assets/images/BookUnkown.jpg";
import "./BookCreate.css"; 

const BookCreate = () => {
  const cover = useRef();

  return (
    <section className="book-creation-container">
      <section className="book-creation-heading mb-2">
        <h3>
          <GiOpenBook /> Book Insertion
        </h3>
      </section>
      <section className="book-creation-body">
        <section className="creation-body-form">
          <FormCreateBook />
        </section>
        <section className="creation-body-img">
          <img src={default_book} alt="book_cover" />
        </section>
      </section>
    </section>
  );
};

export default BookCreate;
