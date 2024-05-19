const isPrime = (num: number) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

const umpteenthPrime = (n: number) => {
  if (n === 1) return 2;
  let count = 1;
  let num = 3;

  while (count < n) {
    num += 2;
    if (isPrime(num)) {
      count++;
    }
  }

  return num;
};

interface CalculationResultProps {
  n: number;
  valueResult: (result: number) => void;
}

class SeriesCalculator {
  public calculateSeriesValue(n: number): number {
    if (n < 2) throw new Error("Error ");
    const calculationWithPrime = umpteenthPrime(n - 2);
    const calculationWithTriangular = 2;
    const calculationWithFibonacci = 3;
    const seriesN =
      2 *
      calculationWithPrime *
      3 *
      calculationWithTriangular *
      7 *
      calculationWithFibonacci;
    return seriesN;
  }
}

const CalculationResult: React.FC<CalculationResultProps> = ({
  n,
  valueResult,
}) => {
  const seriesCalculator = new SeriesCalculator();

  return (
    <>
      <div>{seriesCalculator.calculateSeriesValue(n)}</div>
    </>
  );
};

export default CalculationResult;
