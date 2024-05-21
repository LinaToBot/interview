import { useEffect } from "react";

const isPrimeNumber = (n: number): boolean => {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;
  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

const umpteenthPrimeNumbers = (n: number): number => {
  if (n === 1) return 2;
  let count = 1;
  let primeNum = 3;

  while (count < n) {
    primeNum += 2;
    if (isPrimeNumber(primeNum)) {
      count++;
    }
  }

  return primeNum;
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

export class SeriesCalculator {
  public calculateSeriesValue(n: number): number {
    if (n < 2) throw new Error("Error");
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

  useEffect(() => {
    try {
      const result = seriesCalculator.calculateSeriesValue(n);
      valueResult(result);
    } catch (error) {
      console.error(error);
    }
  }, [n, valueResult, seriesCalculator]);

  return null;
};

export default CalculationResult;
