// libraries.
import { useState } from "react";
// components.
import { FormPage } from "./components/formPage";
import CalculationResult from "./components/calculationResult";
import { ShowResultModal } from "./components/ShowResultModal";

// styles
import "./App.css";

const App: React.FC = () => {
  const [number, setNumber] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleCalculate = (num: number) => {
    setNumber(num);
  };

  const handleResult = (resultingValue: number) => {
    setResult(resultingValue);
  };

  return (
    <div className="App">
      <h1>Calculador de series</h1>
      <FormPage valueInNumber={handleCalculate} />
      <CalculationResult n={number} valueResult={handleResult} />
      <ShowResultModal calculationResult={result} />
    </div>
  );
};

export default App;
