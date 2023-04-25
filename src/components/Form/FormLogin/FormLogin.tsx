import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { HiUser, HiLockClosed, HiLibrary } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import "./FormLogin.css";

const FormLogin = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="react-login-form col-5">
      <section className="form-control-heading text-lightblue fs-2">
        <HiLibrary /> SignIn
      </section>
      <section className="form-control-input">
        <HiUser className="form-control-icon" />
        <input type="email" id="email" className="form-control" placeholder="email@gmail.com" {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
      </section>
      {errors.email && <span className="text-danger">This field is required and must be a valid email</span>}

      <section className="form-control-input">
        <HiLockClosed className="form-control-icon" />
        <span className="password-eye-icon" onClick={() => setPasswordVisibility(!passwordVisibility)}>
          {passwordVisibility ? <AiFillEyeInvisible /> : <BsEyeFill />}
        </span>
        <input type={passwordVisibility ? "text" : "password"} id="password" className="form-control" placeholder="********" {...register("password", { required: true })} />
      </section>
      {errors.password && <span className="text-danger">This field is required and must be a valid password</span>}

      <section className="form-control-submit col-6">
        <button type="submit" className="btn btn-outline-success mb-1">
          Sign In
        </button>
        <Link className="text-lightblue text-center small-text" to="/authenication/register">
          Register? I don't have account
        </Link>
      </section>
    </form>
  );
};

export default FormLogin;
