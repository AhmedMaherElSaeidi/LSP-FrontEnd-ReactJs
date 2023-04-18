import { useState } from "react";
import { useParams } from "react-router-dom";
import FormSelect from "../Form/FormSelect/FormSelect";
import FormInput from "../Form/FormInput/FormInput";
import { AiFillEdit } from "react-icons/ai";
import data from "../../core/services";
import { categories } from "../../core/services";
import "./UpdateBook.css";

const UpdateBook = () => {
  let { id } = useParams();
  const method = (value: string) => console.log(value);
  const book = data.filter((v) => v.isbn == id)[0];

  const [cover, setCover] = useState("");

  return (
    <section className="book-edit">
      <form action="" className="d-flex">
        <section className="book-lcover">
          <img src={book.cover} alt="book_cover" />
          <span className="title-input-lcover">
            <AiFillEdit />
            <FormInput inputType="text" inputName="title" inputMethod={method} inputValue={book.title} inputClass="book-input" />
          </span>
          <span className="author-input-lcover">
            <AiFillEdit />
            <FormInput inputType="text" inputName="author" inputMethod={method} inputValue={book.author} inputClass="book-input" />
          </span>
          <span className="category-select-lcover">
            <AiFillEdit />
            <FormSelect selectName="categories" selectMethod={method} selectValue={book.category} selectOPtions={categories} selectClass="book-input" selectDefaultUI={false} />
          </span>
        </section>
        <section className="book-rcontent d-flex flex-column text-white">
          <h3>ISBN {book.isbn}</h3>
          <h6 className="d-flex align-items-center">
          <AiFillEdit/> Rack <FormInput inputType="text" inputName="rackNumber" inputMethod={method} inputValue={book.rackNumber} inputClass="book-input" />
          </h6>
          <section className=" mt-auto">
            <img src={cover} alt="" />
            <FormInput inputType="file" inputName="cover" inputMethod={(v) => setCover(v)} inputClass="book-input mb-3" />
            <button type="submit" className="btn btn-outline-light">
              Update
            </button>
          </section>
        </section>
      </form>
    </section>
  );
};

export default UpdateBook;
