const { add, sub, mul, div } = require('../calculator');

describe('Calculator basic operations', () => {
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 = 6', () => {
    expect(sub(10, 4)).toBe(6);
  });

  test('45 * 2 = 90', () => {
    expect(mul(45, 2)).toBe(90);
  });

  test('20 / 5 = 4', () => {
    expect(div(20, 5)).toBe(4);
  });

  test('division by zero throws', () => {
    expect(() => div(1, 0)).toThrow('Division by zero');
  });

  test('works with negative numbers and floats', () => {
    expect(add(-1, 1)).toBe(0);
    expect(sub(1.5, 0.5)).toBeCloseTo(1.0);
    expect(mul(-2, -3)).toBe(6);
    expect(div(7.5, 2.5)).toBeCloseTo(3.0);
  });
});
