import { ReactNode, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./FormInput.css";

interface FormInputProps {
  children: ReactNode;
  inputType: string;
  inputValue?: string;
  inputMethod: (value: any) => void;
}

const FormInput = ({ children, inputType, inputValue, inputMethod }: FormInputProps) => {
  const [input, setInput] = useState(inputValue);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setValue("input", inputValue);
  }, [setValue]);

  const onSubmit = (data: any) => {
    if (input == data.input) return;

    setInput(data.input);
    inputMethod(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="input-control-form">
      <section className="form-control-input">
        <input type={inputType} id="input" className="form-control" {...register("input", { required: true })} />
      </section>
      {errors.input && errors.input.type === "required" && <span className="text-danger small-text">Not Valid</span>}
      <section className="form-control-submit">{children}</section>
    </form>
  );
};

export default FormInput;
