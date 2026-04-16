#!/usr/bin/env node

// CLI Calculator (wrapper)
// Supported operations:
//   add or +  -> addition
//   sub or -  -> subtraction
//   mul or *  -> multiplication
//   div or /  -> division

const { add, sub, mul, div } = require('./calculator');

function showUsage() {
  console.log('Usage: node src/index.js <operation> <number1> <number2>');
  console.log('Operations: add (+), sub (-), mul (*), div (/)');
}

const [, , op, aStr, bStr] = process.argv;

if (!op || !aStr || !bStr) {
  showUsage();
  process.exit(1);
}

const a = Number(aStr);
const b = Number(bStr);

if (!Number.isFinite(a) || !Number.isFinite(b)) {
  console.error('Error: both operands must be valid numbers');
  process.exit(1);
}

const ops = {
  add: add,
  '+': add,
  sub: sub,
  '-': sub,
  mul: mul,
  '*': mul,
  div: div,
  '/': div
};

const fn = ops[op.toLowerCase()];
if (!fn) {
  console.error(`Unknown operation: ${op}`);
  showUsage();
  process.exit(1);
}

try {
  const result = fn(a, b);
  console.log(result);
} catch (err) {
  console.error('Error:', err.message);
  process.exit(1);
}
