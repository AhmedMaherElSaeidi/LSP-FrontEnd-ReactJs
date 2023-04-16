import { useState } from "react";

interface FormSelectProps {
  selectName: string;
  selectValue?: string;
  selectClass?: string;
  selectOPtions?: any[];
  selectMethod?: (value: string) => void;
}
const FormSelect = ({ selectName, selectValue, selectClass, selectOPtions, selectMethod }: FormSelectProps) => {
  const [value, setValue] = useState(selectValue);
  const sendData = (value: string) => {
    setValue(value);
    if (selectMethod != undefined) selectMethod!(value);
  };

  return (
    <section className={selectClass}>
      <select className="form-select" name={selectName} onChange={(event) => sendData(event.target.value)} required>
        {selectValue && (
          <option defaultValue={selectValue.toLowerCase()}>
            {selectValue}
          </option>
        )}
        {selectOPtions
          ?.filter((v) => v != selectValue)
          .map((value, key) => {
            return (
              <option key={key} value={value.toLowerCase()}>
                {value}
              </option>
            );
          })}
      </select>
    </section>
  );
};

export default FormSelect;
