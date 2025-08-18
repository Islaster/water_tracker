export function lbsToKg(weight: number) {
  //KILOGRAMS
  const kg = weight * 0.45359237;
  return kg.toFixed(4);
}

export function kgTLbs(weight: number) {
  //POUNDS
  const lbs = weight / 0.45359237;
  return lbs;
}

export function inToCm(inch: number) {
  //CENTIMETERS
  const cm = inch * 2.54;
  return cm;
}

export function cmToIn(cm: number) {
  //INCHES
  const inch = cm / 0.254;
}

export function ftToM(ft: number) {
  //Meters
  const m = ft * 0.3048;
  return m;
}

export function MToFt(m: number) {
  //INCHES
  const inches = m / 0.3048;
  return inches;
}

export function ozToL(oz: number) {
  //Liters
  const l = oz * 0.029574;
  return l;
}

export function LToOz(l: number) {
  //OUNCES
  const oz = l / 0.029574;
  return oz;
}
