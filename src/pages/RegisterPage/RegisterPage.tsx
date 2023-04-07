import { useState } from "react";
import FormBox from "../../components/Form/FormBox/FormBox";
import FormInput from "../../components/Form/FormInput/FormInput";
import FormRadio from "../../components/Form/FormRadio/FormRadio";

import { MdDriveFileRenameOutline, MdEmail, MdLock, MdPhone } from "react-icons/md";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsEyeFill } from "react-icons/bs";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [isVisible, setisVisiblity] = useState(false);
  const gender = ["male", "female"];

  return (
    <FormBox bgkclass="regesteration-form" formHeader="SignUp" formWidth="col-5">
      <FormInput inputType="text" inputName="name" inputPlaceHolder="John Smith">
        <MdDriveFileRenameOutline className="form-control-icon" />
      </FormInput>
      <FormInput inputType="email" inputName="email" inputPlaceHolder="john@gmail.com">
        <MdEmail className="form-control-icon" />
      </FormInput>
      <FormInput inputType={isVisible ? "text" : "password"} inputName="password" inputPlaceHolder="password">
        <span className="password-eye-icon" onClick={() => setisVisiblity(!isVisible)}>{isVisible ? <AiFillEyeInvisible /> : <BsEyeFill />}</span>
        <MdLock className="form-control-icon" />
      </FormInput>
      <FormInput inputType={isVisible ? "text" : "password"} inputName="re-password" inputPlaceHolder="Re-type Password">
        <MdLock className="form-control-icon" />
      </FormInput>
      <FormInput inputType="tel" inputName="tel" inputPlaceHolder="+20112317152">
        <MdPhone className="form-control-icon" />
      </FormInput>
      <FormRadio radioInputs={gender}></FormRadio>
      <section className="d-grid gap-2 col-6 mx-auto">
        <button type="submit" name="submit" className="btn btn-outline-warning">
          Submit
        </button>
        <section className="form-check form-check-inline">
          <input className="form-check-input" type="Checkbox" required />
          <label className="form-check-label text-gold small-text"> I agree with terms and conditions </label>
        </section>
        <a className="text-gold small-text text-center">Already have account? Register</a>
      </section>
    </FormBox>
  );
};

export default RegisterPage;
