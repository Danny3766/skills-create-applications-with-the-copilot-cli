#!/usr/bin/env node

// CLI Calculator
// Supported operations:
//   add or +  -> addition
//   sub or -  -> subtraction
//   mul or *  -> multiplication
//   div or /  -> division
//
// Usage:
//   node src/index.js <operation> <number1> <number2>
// Examples:
//   node src/index.js add 2 3
//   node src/index.js + 4 5

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
  add: (x, y) => x + y,
  '+': (x, y) => x + y,
  sub: (x, y) => x - y,
  '-': (x, y) => x - y,
  mul: (x, y) => x * y,
  '*': (x, y) => x * y,
  div: (x, y) => {
    if (y === 0) {
      throw new Error('Division by zero');
    }
    return x / y;
  },
  '/': (x, y) => {
    if (y === 0) {
      throw new Error('Division by zero');
    }
    return x / y;
  }
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
