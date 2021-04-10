export const formatThreeIntegerDigits = (value) => {
  return Intl.NumberFormat("es-AR", {
    minimumIntegerDigits: 3,
  }).format(value);
};

export const convertToDecimal = (value) => {
  return Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 2,
  }).format(value !== 0 && value / 10);
};

export const convertToLbs = (value) => {
  return Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 2,
  }).format(value !== 0 && (value * 2.204) / 10);
};

export const convertCmToFeetAndInches = (value) => {
  const valueInCm = value * 10;

  var realFeet = (valueInCm * 0.3937) / 12;
  var feet = Math.floor(realFeet);
  var inches = Math.round((realFeet - feet) * 12);

  return `${feet}' ${inches}´´`;
};
