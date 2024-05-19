import React, { useState } from "react";

// interface FormPageProps {
//   calculateWith: string; // (num: number) = void
// }

export const FormPage: React.FC = () => {
  const [valueToCalculate, setValueToCalculate] = useState<number | string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // here function to calculate the value with other component
    console.log(
      "Click on submit button and value to calculate: ",
      valueToCalculate
    );
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueToCalculate(e.target.value);
    console.log("current value inside input", e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Calcular un número
          <input
            type="number"
            value={valueToCalculate}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
    </>
  );
};
