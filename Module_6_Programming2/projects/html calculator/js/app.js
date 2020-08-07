const calculator = {
  displayValue: "0",
  firstOperand: null,
  waitingForSecondOperand: false,
  secondOperand: null,
  operator: null,
};

function updateDisplay() {
  const display = document.querySelector(".calculator-screen");
  display.value = calculator.displayValue;

  // display flash
  display.style.color = "#000";
  setTimeout(function () {
    display.style.color = "#fff";
  }, 40);
}
updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
  const { target } = event;
  let val = target.value;
  let type = target.type;
  const numRegex = /[0-9]/;
  const opRegex = /[-+/*]/;
  let {
    displayValue,
    firstOperand,
    waitingForSecondOperand,
    operator,
  } = calculator;

  // checks if button is clicked
  if (type == "button") {
    // checks for numbers and makes decicions based on state of the calculator object
    if (val.match(numRegex)) {
      if (displayValue.length === 1 && displayValue[0] == "0") {
        calculator.displayValue = "";
      } else if (waitingForSecondOperand) {
        calculator.displayValue = "";
        calculator.waitingForSecondOperand = false;
      }
      calculator.displayValue += val;
    }

    // checks for operators and sets second operand
    if (val.match(opRegex)) {
      calculator.operator = val;
      calculator.waitingForSecondOperand = true;
      calculator.firstOperand = calculator.displayValue;
    }

    // checks if decimal point is not already in use.
    if (val == ".") {
      if (!displayValue.includes(".")) {
        calculator.displayValue += val;
      }
    }

    // performs calculations
    if (val == "=") {
      if (firstOperand) {
        calculator.secondOperand = displayValue;
        let calc = eval(`
          ${calculator.firstOperand} 
          ${operator} 
          ${calculator.secondOperand}
        `);

        // checks if float and limits decimal places to 2
        let solution = calc % 1 == 0 ? calc : calc.toFixed(2);
        calculator.firstOperand = calculator.displayValue = solution;
        calculator.operator = null;
        calculator.secondOperand = null;
      }
    }

    // resets calculator
    if (val === "allclear") {
      calculator.displayValue = "0";
      calculator.firstOperand = null;
      calculator.waitingForSecondOperand = false;
      calculator.secondOperand = null;
      calculator.operator = null;
    }
    updateDisplay();
  }
});
