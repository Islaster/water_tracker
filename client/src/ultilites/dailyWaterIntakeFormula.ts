export function dailyWaterIntakeFormula(
  height: number,
  weight: number,
  unitType: boolean
) {
  //INNER PART OF THE BSA FORMULA
  let innerForm: number;
  if (unitType) {
    innerForm = (height * weight) / 3600;
    //BSA FORMULA
    const bsa = Math.sqrt(innerForm);
    //LITERS
    const l = bsa * 1.5;
    return l.toFixed(1);
  } else {
    innerForm = (height * weight) / 3131;
    //BSA FORMULA
    const bsa = Math.sqrt(innerForm);
    const oz = bsa * 50.7;
    return oz.toFixed(1);
  }
}
