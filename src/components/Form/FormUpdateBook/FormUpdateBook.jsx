import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SERVER_DOMAIN, SERVER_URL } from "../../../core/globals";
import Spinner from "../../Spinner/Spinner";
import ErrorModal from "../../ErrorModal/ErrorModal";
import InfoModal from "../../InfoModal/InfoModal";
import { getToken, getUser } from "../../../core/authenication";
import "./FormUpdateBook.css";
import { RxDotFilled } from "react-icons/rx";

const FormUpdateBook = () => {
  let { id } = useParams();
  const [info, setInfo] = useState({
    loading: true,
    book: {},
    categories: [],
    err: null,
    changes: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const book_request = axios.get(SERVER_URL + "books/join/book-category/" + id);
    const category_request = axios.get(SERVER_URL + "category");

    axios
      .all([category_request, book_request])
      .then(
        axios.spread((response1, response2) => {
          setInfo({ ...info, book: response2.data, categories: response1.data, loading: false });
          reset({ ...response2.data, category: response2.data.category_id });
        })
      )
      .catch((err) => {
        setInfo({ ...info, err: err.response.data.message, loading: false });
      });
  }, []);

  const onSubmit = (data) => {
    setInfo({ ...info, loading: true });
    axios
      .put(SERVER_URL + `books/${data.book_id}`, data, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setInfo({ ...info, loading: false, changes: !info.changes, message: res.data.message[0].msg });
        // alert(res.data.message)
      })
      .catch((err) => {
        setInfo({ ...info, err: err.response.data.message, loading: false });
      });
  };

  return (
    <>
      <section className="react-book-update-form ">
        <section className="form-control-span">
          {errors.rack_number && (
            <span>
              <RxDotFilled /> Rack Number field is required
            </span>
          )}
          {errors.rack_number && errors.rack_number.type === "pattern" && (
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
          {errors.photo && (
            <span>
              <RxDotFilled /> Image field is required
            </span>
          )}
        </section>
        <form onSubmit={handleSubmit(onSubmit)} className="form-body">
          <section className="form-body-lcontent">
            <img src={SERVER_DOMAIN + info.book.photo} alt="book_cover" />
            <input type="text" id="title" placeholder="Title" className="form-control text-lightblue title-input" {...register("title", { required: true })} />
            <input type="text" id="author" placeholder="Author" className="form-control text-lightblue author-input" {...register("author", { required: true })} />
            <select id="category" className="form-select-custom text-lightblue category-select" {...register("category", { required: true })}>
              <option value="">-- Select a category --</option>
              {info.categories &&
                info.categories.map((value) => {
                  return (
                    <option key={value.category_id} value={value.category_id}>
                      {value.category}
                    </option>
                  );
                })}
            </select>
          </section>
          <section className="form-body-rcontent text-lightblue">
            <section>
              <h3 className="fw-bold">
                ISBN <span className="fs-4 fw-normal">{info.book.ISBN}</span>
              </h3>
              <section className="input-rfield mb-3">
                <h5 className="fw-bold">Rack</h5>
                <input type="number" id="rackNumber" placeholder="Rack Number" className="form-control text-lightblue" {...register("rack_number", { required: true })} />
              </section>
              <textarea id="description" placeholder="Description" className="form-control text-lightblue" {...register("description", { required: true, maxLength: 200 })} />
            </section>
            <section>
              <section className="form-control-submit col-6">
                <button type="submit" className="btn btn-outline-success">
                  Submit
                </button>
              </section>
            </section>
          </section>
        </form>
      </section>
      {info.loading && <Spinner />}
      {info.message && <InfoModal message={info.message} close={(v) => setInfo({ ...info, message: v })} />}
      {info.err && <ErrorModal message={info.err} close={(v) => setInfo({ ...info, err: v })} />}
    </>
  );
};

export default FormUpdateBook;
