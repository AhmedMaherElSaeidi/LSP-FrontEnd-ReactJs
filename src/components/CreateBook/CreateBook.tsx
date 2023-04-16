import { useState } from "react";
import FormSelect from "../Form/FormSelect/FormSelect";
import FormInput from "../Form/FormInput/FormInput";
import { categories } from "../../core/services";
import {GiOpenBook} from 'react-icons/gi'
import default_book from '../../assets/images/BookUnkown.jpg'
import "./CreateBook.css";

const CreateBook = () => {
  const method = (value: string) => console.log(value);
  const [cover, setCover] = useState("");
  return (
    <section className="book-creation">
      <section className="book-creation-heading mb-3">
        <h3><GiOpenBook/> Book Insertion</h3>
      </section>
      <section className="book-creation-body">
        <section className="bk-right-panel">
          <form action="#" method="post" encType="multipart/form-data">
            <FormInput inputType="text" inputName="isbn" inputPlaceHolder="Book ISB" inputMethod={method} inputClass="book-form-input mb-2" />
            <FormInput inputType="number" inputName="rack" inputPlaceHolder="Rack Number" inputMethod={method} inputClass="book-form-input mb-2" />
            <FormInput inputType="text" inputName="title" inputPlaceHolder="Book title" inputMethod={method} inputClass="book-form-input mb-2" />
            <FormInput inputType="text" inputName="author" inputPlaceHolder="Book author" inputMethod={method} inputClass="book-form-input mb-2" />
            <FormSelect selectName="category" selectOPtions={categories} selectMethod={method} selectClass="book-form-select mb-2" />
            <FormInput inputType="file" inputName="cover" inputMethod={method} inputClass="book-form-input mb-3" />

            <section className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="btn btn-outline-secondary">
                Submit
              </button>
            </section>
          </form>
        </section>
        <section className="bk-left-panel mb-2">
          <img src={default_book} alt="book_cover" />
        </section>
      </section>
    </section>
  );
};

export default CreateBook;
