function validateNumber(value, name) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a valid number`);
  }
}

function validateDivisor(value, name = "divisor") {
  validateNumber(value, name);
  if (value === 0) {
    throw new Error("Cannot divide by zero");
  }
}

function addition(a, b) {
  validateNumber(a, "a");
  validateNumber(b, "b");
  return a + b;
}

function subtraction(a, b) {
  validateNumber(a, "a");
  validateNumber(b, "b");
  return a - b;
}

function multiplication(a, b) {
  validateNumber(a, "a");
  validateNumber(b, "b");
  return a * b;
}

function division(a, b) {
  validateNumber(a, "a");
  validateDivisor(b, "b");
  return a / b;
}

function modulo(a, b) {
  validateNumber(a, "a");
  validateDivisor(b, "b");
  return a % b;
}

function power(base, exponent) {
  validateNumber(base, "base");
  validateNumber(exponent, "exponent");
  return base ** exponent;
}

function squareRoot(value) {
  validateNumber(value, "value");
  if (value < 0) {
    throw new Error("Cannot calculate square root of a negative number");
  }
  return Math.sqrt(value);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
