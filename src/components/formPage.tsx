import React, { useState } from "react";

interface FormPageProps {
  valueInNumber: (num: number) => void;
}

export const FormPage: React.FC<FormPageProps> = ({ valueInNumber }) => {
  const [valueToCalculate, setValueToCalculate] = useState<number | string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    valueInNumber(Number(valueToCalculate));
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
      <h1>Calculador de series</h1>
      <form className="form-page" onSubmit={handleSubmit}>
        <label>
          Ingresa un número y según las series numericas de numeros primos,
          <br />
          números triangulares y sucesión de fibonacci te regreso un resultado
        </label>
        <input
          placeholder="Escribe un número"
          type="number"
          value={valueToCalculate}
          onChange={handleChange}
          required
        />
        <button type="submit">Calcular</button>
      </form>
    </>
  );
};
