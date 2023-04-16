import { ReactNode, useState } from "react";
import "./FormInput.css";

interface FormInputProps {
  children?: ReactNode;
  inputType: string;
  inputName: string;
  inputValue?: string;
  inputClass?: string;
  inputPlaceHolder?: string;
  inputMethod?: (value:string) => void;
}

const FormInput = ({ children = <></>, inputType, inputName, inputPlaceHolder = "", inputValue="", inputMethod = undefined, inputClass = "mb-3 form-control-div" }: FormInputProps) => {
  const [value, setValue] = useState(inputValue)
  const sendData =  (value:string) => {
    setValue(value)
    inputMethod!(value)
  }

  return (
    <section className={inputClass}>
      {children}
      {inputMethod == undefined && <input type={inputType} name={inputName} placeholder={inputPlaceHolder} className="form-control" required />}
      {inputMethod != undefined && <input type={inputType} name={inputName} placeholder={inputPlaceHolder} className="form-control" onChange={(event) => {sendData(event.target.value)}} value={value} required />}
    </section>
  );
};

export default FormInput;
