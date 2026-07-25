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
let operator = "+";
let isOperatorSelected = false;

// Operate function

const operate = (operator, num1, num2) => {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return substract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else if (operator === "/") return divide(num1, num2);
  else throw new Error("Incorrect operator!");
};

const updateNum = (num) => {
  if (!isOperatorSelected) {
    if (firstNumber === 0) firstNumber = String(num);
    else firstNumber += String(num);
    display.textContent = `${firstNumber}`;
  } else {
    if (secondNumber === 0) secondNumber = String(num);
    else secondNumber += String(num);
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  }
};

const setOperator = (newOperator) => {
  operator = newOperator;
  isOperatorSelected = true;
  display.textContent = `${firstNumber} ${operator}`;
};
const showResult = () => {
  display.textContent = `${operate(operator, Number(firstNumber), Number(secondNumber))}`;
};
const resetValues = () => {
  firstNumber = 0;
  secondNumber = 0;
  isOperatorSelected = false;
  display.textContent = `${firstNumber}`;
};

const display = document.querySelector(".calculator-display");
display.textContent = `${firstNumber}`;
