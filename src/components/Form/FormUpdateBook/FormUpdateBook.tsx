// @ts-nocheck
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import data from "../../../core/services";
import { categories } from "../../../core/services";
import { RxDotFilled } from "react-icons/rx";
import "./FormUpdateBook.css";

const FormUpdateBook = () => {
  let { id } = useParams();
  const [isChecked, setChecked] = useState(false);
  const book = data.filter((v) => v.isbn == id)[0];

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      isbn: book.isbn,
      rackNumber: book.rackNumber,
      title: book.title,
      author: book.author,
      category: book.category,
      description: book.description,
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <section className="react-book-update-form ">
      <section className="form-control-span">
        {errors.isbn?.type === "required" && (
          <span>
            <RxDotFilled /> Book ISBN field is required.
          </span>
        )}
        {errors.isbn?.type === "pattern" && (
          <span>
            <RxDotFilled /> Invalid ISBN format 'should be 8 digits'
          </span>
        )}
        {errors.rackNumber && (
          <span>
            <RxDotFilled /> Rack Number field is required
          </span>
        )}
        {errors.rackNumber?.type === "pattern" && (
          <span>
            <RxDotFilled /> Invalid Rack Number format 'should be 2 digits'
          </span>
        )}
        {errors.title && (
          <span>
            <RxDotFilled /> Title field is required
          </span>
        )}
        {errors.author && (
          <span>
            <RxDotFilled /> Author field is required
          </span>
        )}
        {errors.category && (
          <span>
            <RxDotFilled /> Category field is required
          </span>
        )}
        {errors.description && (
          <span>
            <RxDotFilled /> Description field is required
          </span>
        )}
        {errors.description && errors.description.value && (
          <span>
            <RxDotFilled /> {`Description should be Max 200 characters (${errors.description.value.length} / 200)`}
          </span>
        )}
        {errors.image && (
          <span>
            <RxDotFilled /> Image field is required
          </span>
        )}
      </section>
      <form onSubmit={handleSubmit(onSubmit)} className="form-body">
        <section className="form-body-lcontent">
          <img src={book.cover} alt="book_cover" />
          <input type="text" id="title" placeholder="Title" className="form-control text-lightblue title-input" {...register("title", { required: true })} />
          <input type="text" id="author" placeholder="Author" className="form-control text-lightblue author-input" {...register("author", { required: true })} />
          <select id="category" className="form-select-custom text-lightblue category-select" {...register("category category-select", { required: true })}>
            <option value="">-- Select a category --</option>
            {categories.map((value, index) => {
              return (
                <option key={index} value={value.replaceAll(" ", "_").toLocaleLowerCase()}>
                  {value}
                </option>
              );
            })}
          </select>
        </section>
        <section className="form-body-rcontent text-lightblue">
          <section>
            <h3 className="fw-bold">
              ISBN <span className="fs-4 fw-normal">{book.isbn}</span>
            </h3>
            <section className="input-rfield mb-3">
              <h5 className="fw-bold">Rack</h5>
              <input type="number" id="rackNumber" placeholder="Rack Number" className="form-control text-lightblue" {...register("rackNumber", { required: true, pattern: /^\d{2}$/ })} />
            </section>
            <textarea id="description" placeholder="Description" className="form-control text-lightblue" {...register("description", { required: true, maxLength: 200 })} />
          </section>
          <section>
            <section className="text-lightblue">
              <section class="form-check mb-2">
                <input class="form-check-input" type="checkbox" id="show-input-check" onClick={(event) => setChecked(event.target.checked)} />
                <label class="form-check-label" htmlFor="show-input-check">
                  Upload new cover?
                </label>
              </section>
              {isChecked && <input type="file" id="image" placeholder="Image" className="form-control" {...register("image", { required: true })} />}
            </section>

            <section className="form-control-submit col-6">
              <button type="submit" className="btn btn-outline-success">
                Submit
              </button>
            </section>
          </section>
        </section>
      </form>
    </section>
  );
};

export default FormUpdateBook;
