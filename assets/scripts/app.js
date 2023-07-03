// Access calculator elements
const numbers = document.querySelectorAll("[id*=num]");
const operators = document.querySelectorAll("[id*=op]");
const display = document.getElementById("display");
const point = document.getElementById("point");
const remove = document.getElementById("remove");
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

// Use the eval method to calculate the
// result of the math expression only
// if there is a valid math operator.
const calculateResult = () => {
  if (mathOperator !== undefined && !newNumber) {
    const result = eval(
      `${Number(pastNumber)}${mathOperator}${Number(display.textContent)}`
    );

    if (result % 1 == 0) {
      display.textContent = result;
    } else {
      display.textContent = result.toFixed(2);
    }

    display.textContent = result;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    updateDisplay(e.target.textContent);
  });
});

point.addEventListener("click", () => {
  if (newNumber) {
    display.textContent = "0.";
    newNumber = false;
  } else if (!display.textContent.includes(".")) {
    display.textContent += ".";
  }
});

remove.addEventListener("click", () => {
  display.textContent = display.textContent.substring(0, display.textContent.length - 1);

  // if (display.textContent.length <= 0) {
  //   newNumber = true;
  // }
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
  mathOperator = undefined;
});
