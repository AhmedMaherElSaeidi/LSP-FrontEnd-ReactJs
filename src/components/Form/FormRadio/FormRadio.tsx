import "./FormRadio.css";

interface FormRadioProps {
  radioInputs: string[];
}

const FormRadio = ({ radioInputs }: FormRadioProps) => {
  return (
    <section className="mb-3 section-radio-buttons">
      {radioInputs.map((value, index) => {
        const display_value = value.charAt(0).toUpperCase() + value.slice(1);
        return (
          <section className="form-check" key={index}>
            <input className="form-check-input" type="radio" name="gender" value={value} />
            <label className="form-check-label text-lightblue">{display_value}</label>
          </section>
        );
      })}
    </section>
  );
};

export default FormRadio;
