import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiLibrary } from "react-icons/hi";
import { BsEyeFill, BsGenderAmbiguous } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdDriveFileRenameOutline, MdEmail, MdPhone, MdLock } from "react-icons/md";
import "./FormRegister.css";

const FormRegister = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const gender = ["male", "female", "other"];
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="react-register-form col-5">
      <section className="form-control-heading text-lightblue fs-2">
        <HiLibrary /> SignUp
      </section>

      <section className="form-control-input">
        <MdDriveFileRenameOutline className="form-control-icon" />
        <input type="text" id="name" className="form-control" placeholder="John Smith" {...register("name", { required: true, minLength: 3 })} />
      </section>
      {errors.name && errors.name.type === "required" && <span className="text-danger">This field is required</span>}
      {errors.name && errors.name.type === "minLength" && <span className="text-danger">Name must be at least 3 characters</span>}

      <section className="form-control-input">
        <MdEmail className="form-control-icon" />
        <input type="email" id="email" className="form-control" placeholder="John@gmail.com" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
      </section>
      {errors.email && errors.email.type === "required" && <span className="text-danger">This field is required</span>}
      {errors.email && errors.email.type === "pattern" && <span className="text-danger">This field must be a valid email</span>}

      <section className="form-control-input">
        <MdPhone className="form-control-icon" />
        <input type="tel" id="phone" className="form-control" placeholder="(+20) 112-317-152" {...register("phone", { required: true, pattern: /^[0-9]{10}$/i })} />
      </section>
      {errors.phone && errors.phone.type === "required" && <span className="text-danger">This field is required</span>}
      {errors.phone && errors.phone.type === "pattern" && <span className="text-danger">This field must be a valid phone number</span>}

      <section className="form-control-input">
        <span className="password-eye-icon" onClick={() => setPasswordVisibility(!passwordVisibility)}>
          {passwordVisibility ? <AiFillEyeInvisible /> : <BsEyeFill />}
        </span>
        <MdLock className="form-control-icon" />
        <input type={passwordVisibility ? "text" : "password"} id="password" className="form-control" placeholder="********" {...register("password", { required: true, minLength: 6 })} />
      </section>
      {errors.password && errors.password.type === "required" && <span className="text-danger">This field is required</span>}
      {errors.password && errors.password.type === "minLength" && <span className="text-danger">Password must be at least 6 characters</span>}

      <section className="form-control-input">
        <MdLock className="form-control-icon" />
        <input type={passwordVisibility ? "text" : "password"} id="repassword" className="form-control" placeholder="********" {...register("repassword", { required: true, validate: (value) => value === watch("password") })} />
      </section>
      {errors.repassword && errors.repassword.type === "required" && <span className="text-danger">This field is required</span>}
      {errors.repassword && errors.repassword.type === "validate" && <span className="text-danger">Passwords must match</span>}

      <section className="form-control-check">
        <BsGenderAmbiguous />
        {gender.map((value, index) => {
          const display_value = value.charAt(0).toUpperCase() + value.slice(1);
          return (
            <section className="form-check" key={index}>
              <input type="radio" id={value} value={value} className="form-check-input" {...register("gender", { required: true })} />
              <label htmlFor={value} className="form-check-label text-lightblue">
                {display_value}
              </label>
            </section>
          );
        })}
      </section>
      {errors.gender && <span className="text-danger">This field is required</span>}

      <section className="form-control-submit col-6">
        <button type="submit" className="btn btn-outline-success mb-2">
          Sign Up
        </button>
        <section className="form-check form-check-inline">
          <label htmlFor="terms" className="form-check-label text-lightblue  small-text">
            I agree with terms and conditions
          </label>
          <input type="checkbox" id="terms" className="form-check-input" {...register("terms", { required: true })} />
        </section>
        <Link className="text-lightblue small-text text-center" to="/authenication/login">
          Already have account? login
        </Link>
      </section>
      {errors.terms && errors.terms.type === "required" && <span className="text-danger">You must agree with the terms and conditions</span>}
    </form>
  );
};

export default FormRegister;
