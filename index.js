// Initial function we will need add, subtract, multiply, divide

const add = (addend1, addend2) => {
  return addend1 + addend2;
};

const substract = (minuend, subtrahend) => {
  return minuend - subtrahend;
};

const multiply = (multiplier, multiplicand) => {
  return multiplier * multiplicand;
};

const divide = (dividend, divisor) => {
  return dividend / divisor;
};

const operate = (operator, num1, num2) => {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return substract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);
  else throw new Error("Incorrect operator!");
};
