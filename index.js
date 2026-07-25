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
  if (divisor === 0) {
    alert("Nice try, but division by zero is not allowed!");
    return 0;
  }
  return dividend / divisor;
};

// 3 variables for our calculator

let firstNumber = null;
let secondNumber = null;
let operator = null;

// After a result is shown, the next digit should start a new calculation
let resultCalled = false;

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
    if (firstNumber === null || resultCalled) {
      firstNumber = String(num);
      resultCalled = false;
    } else firstNumber += String(num);
    display.textContent = `${firstNumber}`;
  } else {
    if (secondNumber === null) secondNumber = String(num);
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
    firstNumber =
      Math.round(
        operate(operator, Number(firstNumber), Number(secondNumber)) * 100,
      ) / 100;
    display.textContent = `${firstNumber}`;
    operator = null;
  } else {
    operator = newOperator;
    display.textContent = `${firstNumber} ${operator}`;
  }
  secondNumber = null;
};

// Store operate result in first number variable
// Reset second number
// Display final value

const showResult = () => {
  firstNumber =
    Math.round(
      operate(operator, Number(firstNumber), Number(secondNumber)) * 100,
    ) / 100;
  secondNumber = null;
  operator = null;
  display.textContent = `${firstNumber}`;
  resultCalled = true;
};

// Reset all variables

const resetValues = () => {
  firstNumber = null;
  secondNumber = null;
  display.textContent = `${firstNumber}`;
};

// Check if variables has any values
// Based on condition remove either from first number or second or operator

const goBack = () => {
  if (operator === null && secondNumber === null) {
    if (firstNumber !== null) firstNumber = String(firstNumber).slice(0, -1);
    display.textContent = `${firstNumber}`;
  } else if (operator !== null && secondNumber === null) {
    operator = null;
    display.textContent = `${firstNumber}`;
  } else if (secondNumber !== null) {
    secondNumber = String(secondNumber.slice(0, -1));
    display.textContent = `${firstNumber} ${operator} ${secondNumber}`;
  }
};

const display = document.querySelector(".calculator-display");
display.textContent = `${firstNumber === null ? 0 : firstNumber}`;
