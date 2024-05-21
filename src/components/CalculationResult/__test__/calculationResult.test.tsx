import { render, waitFor } from "@testing-library/react";
import CalculationResult from "../CalculationResultX";
import { SeriesCalculator } from "../CalculationResultX";

describe("CalculationResult componnet testing", () => {
  const mockValueResult = jest.fn();
  beforeEach(() => mockValueResult.mockClear());

  const seriesCalculator = new SeriesCalculator();
  const testNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  test.each(testNumbers.map((n, index) => [index, n]))(
    `series $(n) number`,
    async (index, n) => {
      const expectedValues = seriesCalculator.calculateSeriesValue(n);

      render(<CalculationResult n={n} valueResult={mockValueResult} />);

      await waitFor(() => {
        expect(mockValueResult).toHaveBeenCalledWith(expectedValues);
        console.log(`Test case ${index}: n = ${n}, result = ${expectedValues}`);
      });
    }
  );

  test("throws error for 'n' less than 2", () => {
    expect(() => {
      seriesCalculator.calculateSeriesValue(1);
    }).toThrow("Error");
  });

  expect(() => {
    seriesCalculator.calculateSeriesValue(0);
  }).toThrow("Error");

  expect(() => {
    seriesCalculator.calculateSeriesValue(-1);
  }).toThrow("Error");
});
