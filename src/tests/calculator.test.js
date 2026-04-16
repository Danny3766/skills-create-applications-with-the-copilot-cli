const test = require("node:test");
const assert = require("node:assert/strict");

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require("../calculator");

test("addition returns sum", () => {
  assert.equal(addition(2, 3), 5);
});

test("subtraction returns difference", () => {
  assert.equal(subtraction(9, 4), 5);
});

test("multiplication returns product", () => {
  assert.equal(multiplication(3, 4), 12);
});

test("division returns quotient", () => {
  assert.equal(division(12, 3), 4);
});

test("division throws on zero divisor", () => {
  assert.throws(() => division(12, 0), /divide by zero/i);
});

test("modulo returns remainder", () => {
  assert.equal(modulo(10, 3), 1);
});

test("modulo throws on zero divisor", () => {
  assert.throws(() => modulo(10, 0), /divide by zero/i);
});

test("power returns exponentiation result", () => {
  assert.equal(power(2, 5), 32);
});

test("power handles fractional exponents", () => {
  assert.equal(power(9, 0.5), 3);
});

test("square root returns value for non-negative number", () => {
  assert.equal(squareRoot(81), 9);
});

test("square root throws for negative number", () => {
  assert.throws(() => squareRoot(-1), /square root of a negative number/i);
});
