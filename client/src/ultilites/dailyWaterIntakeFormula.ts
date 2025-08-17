export function dailyWaterIntakeFormula(height: number, weight: number) {
  //INNER PART OF THE BSA FORMULA
  const innerForm = (height * weight) / 3600;
  //BSA FORMULA
  const bsa = Math.sqrt(innerForm);
  //MILLITERS
  const ml = bsa * 1500;
  //LITERS
  const liters = ml / 1000;
  return liters.toFixed(1);
}
