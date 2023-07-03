const display = document.getElementById("display");

let previousNumber, mathOperator, nextNumber;
let calculateSteps = 0,
  result = 0;

function getNumber(number) {
  display.value = number;
}

function getMathOperator(operator) {
  display.value = operator;
}

function clearDisplay() {
  display.value = 0;
}

function mathCalculator() {
  console.log("Equal button was pressed");
}
