import axios from "axios";
import { SERVER_URL } from "../../core/globals";
import { getUser, getToken } from "../../core/authenication";

import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import "./BookCreate.css";
import { GiOpenBook } from "react-icons/gi";
import Spinner from "../Spinner/Spinner";
import InfoModal from "../InfoModal/InfoModal";
import ErrorModal from "../ErrorModal/ErrorModal";

const BookCreate = () => {
  const [formCB, setFormCB] = useState({
    loading: true,
    categories: [],
    err: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  useEffect(() => {
    axios
      .get(SERVER_URL + "category")
      .then((res) => {
        setFormCB({ ...formCB, loading: false, categories: res.data });
      })
      .catch((err) => {
        setFormCB({ ...formCB, loading: false, err: err.response.data.message });
      });
  }, []);

  const onSubmit = (data) => {
    setFormCB({ ...formCB, loading: true });
    const formData = new FormData();
    formData.append("photo", data.image[0]);
    formData.append("category_id", data.category);
    formData.append("user_id", getUser().userID);
    formData.append("ISBN", data.ISBN);
    formData.append("author", data.author);
    formData.append("category", data.category);
    formData.append("description", data.description);
    formData.append("rack_number", data.rack_number);
    formData.append("title", data.title);

    axios
      .post(SERVER_URL + "books", formData, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        reset();
        // console.log(res.data.message[0].book);
        setFormCB({ ...formCB, loading: false, message: res.data.message[0].msg });
      })
      .catch((err) => {
        setFormCB({ ...formCB, loading: false, err: err.response.data.message });
      });
  };

  return (
    <>
      <section className="book-creation-container">
        <section className="book-creation-heading mb-2">
          <h3>
            <GiOpenBook /> Book Insertion
          </h3>
        </section>
        <section className="creation-body-form">
          <form onSubmit={handleSubmit(onSubmit)} className="react-book-form">
            <section className="mb-2 form-control-input">
              <input type="text" id="ISBN" placeholder="Book ISBN" className="form-control" {...register("ISBN", { required: true, pattern: /^\d{8}$/ })} />
              {errors.ISBN?.type === "required" && <span>This field is required</span>}
              {errors.ISBN?.type === "pattern" && <span>Invalid ISBN format</span>}
            </section>

            <section className="mb-2 form-control-input">
              <input type="text" id="rack_number" placeholder="Rack Number" className="form-control" {...register("rack_number", { required: true })} />
              {errors.rack_number && <span>This field is required</span>}
            </section>

            <section className="mb-2 form-control-input">
              <input type="text" id="title" placeholder="title" className="form-control" {...register("title", { required: true })} />
              {errors.title && <span>This field is required</span>}
            </section>

            <section className="mb-2 form-control-input">
              <input type="text" id="author" placeholder="Author" className="form-control" {...register("author", { required: true })} />
              {errors.author && <span>This field is required</span>}
            </section>

            <section className="mb-2 form-control-select">
              <select id="category" className="form-select" {...register("category", { required: true })}>
                <option value={-1}>-- Select a category --</option>
                {formCB.categories.map((value) => {
                  return (
                    <option key={value.category_id} value={value.category_id}>
                      {value.category}
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
        </section>
      </section>
      {formCB.message && <InfoModal message={formCB.message} close={(v) => setFormCB({ ...formCB, message: v })} />}
      {formCB.loading && <Spinner />}
      {formCB.err && <ErrorModal message={formCB.err} close={(v) => setFormCB({ ...formCB, err: v })} />}
    </>
  );
};

export default BookCreate;
