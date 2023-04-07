import { ReactNode } from "react";
import "./FormInput.css";

interface FormInputProps {
  children: ReactNode;
  inputType: string;
  inputName: string;
  inputPlaceHolder?: string;
}

const FormInput = ({ children, inputType, inputName, inputPlaceHolder = "" }: FormInputProps) => {
  return (
    <section className="mb-3 form-control-div">
      {children}
      <input type={inputType} name={inputName} placeholder={inputPlaceHolder} className="form-control" required />
    </section>
  );
};

export default FormInput;
