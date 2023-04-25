// @ts-nocheck
import { useForm } from "react-hook-form";
import { categories } from "../../../core/services";
import "./FormCreateBook.css";

const FormCreateBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {    
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="react-book-form">
      <section className="mb-2 form-control-input">
        <input type="text" id="bookISBN" placeholder="Book ISBN" className="form-control" {...register("bookISBN", { required: true, pattern: /^\d{8}$/ })} />
        {errors.bookISBN?.type === "required" && <span>This field is required</span>}
        {errors.bookISBN?.type === "pattern" && <span>Invalid ISBN format</span>}
      </section>

      <section className="mb-2 form-control-input">
        <input type="text" id="bookRackNumber" placeholder="Rack Number" className="form-control" {...register("bookRackNumber", { required: true })} />
        {errors.bookRackNumber && <span>This field is required</span>}
      </section>

      <section className="mb-2 form-control-input">
        <input type="text" id="title" placeholder="Title" className="form-control" {...register("title", { required: true })} />
        {errors.title && <span>This field is required</span>}
      </section>

      <section className="mb-2 form-control-input">
        <input type="text" id="author" placeholder="Author" className="form-control" {...register("author", { required: true })} />
        {errors.author && <span>This field is required</span>}
      </section>

      <section className="mb-2 form-control-select">
        <select id="category" className="form-select" {...register("category", { required: true })}>
          <option value="">-- Select a category --</option>
          {categories.map((value, index) => {
            return (
              <option key={index} value={value.replaceAll(" ", "_").toLocaleLowerCase()}>
                {value}
              </option>
            );
          })}
        </select>
        {errors.category && <span>This field is required</span>}
      </section>

      <section className="mb-2 form-control-textarea">
        <textarea id="description" placeholder="Description" className="form-control" {...register("description", { required: true, maxLength: 200 })} />
        {errors.description && <span>This field is required</span>}
        {errors.description && errors.description.value && <span>{`Max 200 characters (${errors.description.value.length} / 200)`}</span>}
      </section>

      <section className="mb-2 form-control-input">
        <input type="file" id="image" placeholder="Image" className="form-control" {...register("image", { required: true })} />
        {errors.image && <span>This field is required</span>}
      </section>

      <section className="form-control-submit col-6">
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </section>
    </form>
  );
};

export default FormCreateBook;
