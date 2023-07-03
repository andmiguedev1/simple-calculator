// Access calculator elements
const numbers = document.querySelectorAll("[id*=num]");
const operators = document.querySelectorAll("[id*=op]");
const display = document.getElementById("display");
const equal = document.getElementById("equal");
const reset = document.getElementById("reset");

// Initalize calculator variables
let pastNumber, mathOperator;
let newNumber = true;

// If there is a new number, display it.
// Otherwise put it next to the number
// previously clicked on calculator
const updateDisplay = (strNumber) => {
  if (newNumber) {
    display.textContent = strNumber;
    newNumber = false;
  } else {
    display.textContent += strNumber;
  }
};

const calculateResult = () => {
  if (mathOperator !== undefined && !newNumber) {
    const result = eval(
      `${Number(pastNumber)}${mathOperator}${Number(display.textContent)}`
    );

    display.textContent = result;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    updateDisplay(e.target.textContent);
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    calculateResult();
    pastNumber = display.textContent;
    newNumber = true;
    mathOperator = e.target.textContent;
  });
});

equal.addEventListener("click", () => {
  calculateResult();
  newNumber = true;
});

reset.addEventListener("click", () => {
  display.textContent = 0;
  newNumber = true;
});
