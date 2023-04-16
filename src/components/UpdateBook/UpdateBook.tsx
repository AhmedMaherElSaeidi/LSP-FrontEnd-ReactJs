import { useState } from "react";
import FormInput from "../Form/FormInput/FormInput";
import data from "../../core/services";
import "./UpdateBook.css";
import FormSelect from "../Form/FormSelect/FormSelect";

interface UpdateBookProps {
  boookid: number;
}
const UpdateBook = ({boookid}:UpdateBookProps) => {
  const method = (value: string) => console.log(value);
  const book = data.filter(v => v.isbn === boookid)
  const [cover, setCover] = useState("")

  return (
    <section className="book-edit">
      <form action="" className="d-flex">
        <section className="book-lcover">
          <img src={"https://images.unsplash.com/photo-1678786202821-cd5cd3fa3f3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"} alt="my_girl" />
          <FormInput inputType="text" inputName="title" inputMethod={method} inputValue="title" inputClass="title-input-lcover book-input" />
          <FormInput inputType="text" inputName="author" inputMethod={method} inputValue="author" inputClass="author-input-lcover book-input" />
          <FormSelect selectName="categories" selectMethod={method} selectValue={"category"} selectClass="category-select-lcover book-input"/>
        </section>
        <section className="book-rcontent d-flex flex-column text-gold">
          <h3>{"ISBN"}</h3>
          <FormInput inputType="text" inputName="rackNumber" inputMethod={method} inputValue="rack number" inputClass="book-input" />
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