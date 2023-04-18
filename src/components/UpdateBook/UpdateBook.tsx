import { useState } from "react";
import FormSelect from "../Form/FormSelect/FormSelect";
import FormInput from "../Form/FormInput/FormInput";
import data from "../../core/services";
import { categories } from "../../core/services";
import "./UpdateBook.css";
import { useParams } from "react-router-dom";

const UpdateBook = () => {
  let { id } = useParams();
  const method = (value: string) => console.log(value);
  const book = data.filter(v => v.isbn == id)[0];
  
  const [cover, setCover] = useState("")

  return (
    <section className="book-edit">
      <form action="" className="d-flex">
        <section className="book-lcover">
          <img src={book.cover} alt="my_girl" />
          <FormInput inputType="text" inputName="title" inputMethod={method} inputValue={book.title} inputClass="title-input-lcover book-input" />
          <FormInput inputType="text" inputName="author" inputMethod={method} inputValue={book.author} inputClass="author-input-lcover book-input" />
          <FormSelect selectName="categories" selectMethod={method} selectValue={book.category} selectOPtions={categories} selectClass="category-select-lcover book-input" selectDefaultUI={false}/>
        </section>
        <section className="book-rcontent d-flex flex-column text-gold">
          <h3>ISBN {book.isbn}</h3>
          <h6>Rack <FormInput inputType="text" inputName="rackNumber" inputMethod={method} inputValue={book.rackNumber} inputClass="book-input" /></h6>
          <section className=" mt-auto">
            <img src={cover} alt="" />
            <FormInput inputType="file" inputName="cover" inputMethod={(v) => setCover(v)} inputClass="book-input" />
          </section>
        </section>
      </form>
    </section>
  )
}

export default UpdateBook