/**
 * Algorithm
 *
 * 1. Keep track of each number clicked by the user
 * 2. Convert to a list of numbers and store it in
 * a temporary variables as a string
 *
 * 3. Keep track of math operation clicked by user
 * 4. Repeat the first step and second step, for
 * the second selection
 *
 * 5. Check if math operation, matches what each button
 * holds as a value, then perform calculation on expression
 *
 * 6. Once user, clicked the clear button, set calculator
 * variables to its original values, or null
 */

// Access calculator elements
const display = document.getElementById("display");

// Initalize calculator variables
let calculateSteps = 0;
let pastNumber, mathOperator, nextNumber, result;

let firstNumbers = [];
let secondNumbers = [];

function getNumbers(number) {
  if (calculateSteps === 0 || calculateSteps === 1) {
    firstNumbers.push(number); // [7,5,4]
    calculateSteps = 1;
    pastNumber = Number(firstNumbers.join("")); // '754'
    display.value = pastNumber;
  } else if (calculateSteps === 2) {
    secondNumbers.push(number);
    nextNumber = Number(secondNumbers.join(""));
    display.value = nextNumber;
  }
}

function getMathOperator(operator) {
  calculateSteps = 2;
  mathOperator = operator;
}

function clearDisplay() {
  display.value = 0;
  pastNumber = null;
  mathOperator = null;
  nextNumber = null;
  calculateSteps = 0;
  firstNumbers = [];
  secondNumbers = [];
  result = 0;
}

function mathCalculator() {
  if (mathOperator === "/") {
    result = pastNumber / nextNumber;
    display.value = result;
  } else if (mathOperator === "*") {
    result = pastNumber * nextNumber;
    display.value = result;
  } else if (mathOperator === "-") {
    result = pastNumber - nextNumber;
    display.value = result;
  } else if (mathOperator === "+") {
    result = pastNumber + nextNumber;
    display.value = result;
  } else if (mathOperator === "%") {
    result = pastNumber % nextNumber;
    display.value = result;
  }
}
