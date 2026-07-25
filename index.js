// Initial functions we will need add, subtract, multiply, divide

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

// 3 variables for our calculator

let firstNumber = 0;
let secondNumber = 0;
let operator = null;

// Operate function

const operate = (operator, num1, num2) => {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return substract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);
  else throw new Error("Incorrect operator!");
};

// Click on button => add digit to number
// If we already chose operator => add digit to second number

const updateNum = (num) => {
  if (!operator) {
    if (firstNumber === 0) firstNumber = String(num);
    else firstNumber += String(num);
    display.textContent = `${firstNumber}`;
  } else {
    if (secondNumber === 0) secondNumber = String(num);
    else secondNumber += String(num);
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  }
};

// Set operator value
// Display first number and operator

const setOperator = (newOperator) => {
  // IF operator was selected already call operate function and store it inside variable
  // Display result in first variable
  // Reset operator

  if (operator) {
    firstNumber = Number(
      operate(operator, Number(firstNumber), Number(secondNumber)),
    ).toFixed(2);
    display.textContent = `${firstNumber}`;
    operator = null;
  } else {
    operator = newOperator;
    display.textContent = `${firstNumber} ${operator}`;
  }
  secondNumber = 0;
};

// Store operate result in first number variable
// Reset second number
// Display final value

const showResult = () => {
  firstNumber = Number(
    operate(operator, Number(firstNumber), Number(secondNumber)),
  ).toFixed(2);
  secondNumber = 0;
  operator = null;
  display.textContent = `${firstNumber}`;
};

// Reset all variables
const resetValues = () => {
  firstNumber = 0;
  secondNumber = 0;
  display.textContent = `${firstNumber}`;
};

const display = document.querySelector(".calculator-display");
display.textContent = `${firstNumber}`;
