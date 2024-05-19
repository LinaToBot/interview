const isPrimeNumber = (num: number): boolean => {
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

const umpteenthPrimeNumbers = (n: number): number => {
  if (n === 1) return 2;
  let count = 1;
  let num = 3;

  while (count < n) {
    num += 2;
    if (isPrimeNumber(num)) {
      count++;
    }
  }

  return num;
};

const triangularNumbers = (n: number): number => {
  return (n * n + n) / 2;
};

const fibonacciNumbers = (n: number): number => {
  if (n <= 1) {
    return n;
  } else return fibonacciNumbers(n - 1) + fibonacciNumbers(n - 2);
};

interface CalculationResultProps {
  n: number;
  valueResult: (result: number) => void;
}

class SeriesCalculator {
  public calculateSeriesValue(n: number): number {
    if (n < 2) throw new Error("Error ");
    const calculationWithPrime = umpteenthPrimeNumbers(n - 2);
    const calculationWithTriangular = triangularNumbers(n - 2);
    const calculationWithFibonacci = fibonacciNumbers(n - 1);
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
