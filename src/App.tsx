// libraries.
import { useState } from "react";
// components.
import { FormPage } from "./components/FormPage";
import CalculationResult from "./components/CalculationResult/CalculationResult";
import { ShowResult } from "./components/ShowResult";

// styles
import { AppContainer, GlobalStyle } from "./styles/styles";

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
    <>
      <GlobalStyle />
      <AppContainer>
        <FormPage valueInNumber={handleCalculate} />
        <CalculationResult n={number} valueResult={handleResult} />
        <ShowResult calculationResult={result} />
      </AppContainer>
    </>
  );
};

export default App;
