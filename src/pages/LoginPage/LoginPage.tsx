import { useState } from "react";
import FormBox from "../../components/Form/FormBox/FormBox";
import FormInput from "../../components/Form/FormInput/FormInput";

import { HiLockClosed, HiUser } from "react-icons/hi";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [isVisible, setisVisiblity] = useState(false);

  return (
    <FormBox bgkclass="login-form" formHeader="SignIn" formWidth="col-5">
      <FormInput inputType="email" inputName="email" inputPlaceHolder="john@gmail.com">
        <HiUser className="form-control-icon" />
      </FormInput>
      <FormInput inputType={isVisible ? "text" : "password"} inputName="password" inputPlaceHolder="********">
        <HiLockClosed className="form-control-icon" />
        <span className="password-eye-icon" onClick={() => setisVisiblity(!isVisible)}>
          {isVisible ? <AiFillEyeInvisible /> : <BsEyeFill />}
        </span>
      </FormInput>
      <section className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" name="submit" className="btn btn-outline-success">
          Sign In
        </button>
        <Link className="text-lightblue text-center small-text" to="/authenication/register">
          Register? I don't have account
        </Link>
      </section>
    </FormBox>
  );
};

export default LoginPage;
