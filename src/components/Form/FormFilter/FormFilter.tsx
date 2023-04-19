import { useForm } from "react-hook-form";
import { FaFilter } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { TbZoomReset } from "react-icons/tb";
import "./FormFilter.css";

interface FormFilterProps {
  submit: (keys: string[], data: any) => void;
  reset: () => void;
}
const FormFilter = ({ submit, reset }: FormFilterProps) => {
  const { register, handleSubmit  } = useForm();
  const onSubmit = (data: any) => {
    const filter_keys = [...Object.keys(data)];
    submit(filter_keys, data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-filter">
      <section className="navbar navbar-expand-lg navbar-light bg-light">
        <section className="container-fluid">
          <section className="navbar-brand form-input-submit">
            <label className="input-search-icon" htmlFor="inputSubmit">
              <BiSearchAlt />
            </label>
            <input type="text" id="inputField" placeholder="Search" className="form-control" {...register("inputField")} /> <input type="submit" id="inputSubmit" hidden />
          </section>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fs-5">
              <FaFilter />
            </span>
          </button>
          <section className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav fw-bold">
              <li className="nav-link form-check form-checkbox-list">
                <label htmlFor="isbn" className="form-check-label cursor-pnt">
                  ISBN
                </label>
                <input type="checkbox" id="isbn" className="form-check-input" {...register("isbn")} />
              </li>
              <li className="nav-link form-check form-checkbox-list">
                <label htmlFor="racknumber" className="form-check-label cursor-pnt">
                  Rack Number
                </label>
                <input type="checkbox" id="racknumber" className="form-check-input" {...register("racknumber")} />
              </li>
              <li className="nav-link form-check form-checkbox-list">
                <label htmlFor="author" className="form-check-label cursor-pnt">
                  Author
                </label>
                <input type="checkbox" id="author" className="form-check-input" {...register("author")} />
              </li>
              <li className="nav-link form-check form-checkbox-list">
                <label htmlFor="title" className="form-check-label cursor-pnt">
                  Title
                </label>
                <input type="checkbox" id="title" className="form-check-input" {...register("title")} />
              </li>
              <li className="nav-link form-check form-checkbox-list">
                <label htmlFor="category" className="form-check-label cursor-pnt">
                  Category
                </label>
                <input type="checkbox" id="category" className="form-check-input" {...register("category")} />
              </li>
              <li className="nav-link form-check form-checkbox-list">
                <label htmlFor="availability" className="form-check-label cursor-pnt">
                  Availability
                </label>
                <input type="checkbox" id="availability" className="form-check-input" {...register("availability")} />
              </li>
              <li className="nav-link">
                <span className="fw-bold" onClick={reset}>
                  <TbZoomReset /> Reset
                </span>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </form>
  );
};

export default FormFilter;
