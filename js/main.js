console.log("Hello World");

let displayValue = "";
let aValue = "";
let bValue = "";
let operValue = "";
let resultValue = "";

function createNumButtons() {
  const inputNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const $inputNum = document.querySelector("#input-num");

  inputNumbers.forEach((num) => {
    const span = document.createElement("span");
    span.setAttribute("id", `num-${num}`);
    span.classList.add("btn", "txt-center");
    span.textContent = `${num}`;
    $inputNum.appendChild(span);
  });
}
createNumButtons();

function createCalcButtons() {
  const inputOperators = ["+", "-", "*", "/"];
  const $inputCalc = document.querySelector("#input-calc");

  inputOperators.forEach((oper) => {
    const span = document.createElement("span");
    span.setAttribute("id", `oper-${oper}`);
    span.classList.add("btn");
    span.textContent = `${oper}`;
    $inputCalc.appendChild(span);
  });
}
createCalcButtons();

function add(a, b) {
  return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
  return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
  return parseInt(a) * parseInt(b);
}

function divide(a, b) {
  return parseInt(a) / parseInt(b);
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      resultValue = add(a, b);
      break;

    case "-":
      resultValue = subtract(a, b);
      break;

    case "*":
      resultValue = multiply(a, b);
      break;

    case "/":
      if (bValue === "0") {
        clear();
        updateDisplay("This way...it is not. 🧘‍♀️");
        break;
      }
      resultValue = divide(a, b);
      break;

    default:
      break;
  }
}

function setValues() {
  if (!aValue) {
    aValue = displayValue;
    displayValue = "";
  } else {
    bValue = displayValue;
  }
}

function cleanValues() {
  displayValue = "";
  bValue = "";
  operValue = "";
}

function clear() {
  displayValue = "";
  aValue = "";
  bValue = "";
  operValue = "";
  resultValue = "";
}

function updateDisplay(num) {
  const $display = document.querySelector("#display");
  $display.textContent = num;
}

function updateResult(num) {
  const $result = document.querySelector("#result");
  if (num) {
    $result.textContent = num.toFixed(2);
  } else {
    $result.textContent = "";
  }
}

window.addEventListener("click", (e) => {
  // NUMBERS INPUT
  if (e.target.id === `num-${e.target.textContent}`) {
    displayValue += e.target.textContent;
    updateDisplay(displayValue);
  }

  // OPERATORS INPUT
  if (e.target.id === `oper-${e.target.textContent}`) {
    operValue = `${e.target.textContent}`;
    setValues();

    if (aValue && bValue && operValue) {
      operate(operValue, aValue, bValue);
      updateResult(resultValue);
      cleanValues();
      aValue = resultValue;
    }
  }

  // OPERATE
  if (e.target.id === "operate") {
    setValues();

    if (aValue && bValue && operValue) {
      operate(operValue, aValue, bValue);
      updateResult(resultValue);
      cleanValues();
      aValue = resultValue;
    }
  }

  // CLEAR
  if (e.target.id === "clear") {
    clear();
    updateDisplay(displayValue);
    updateResult("");
  }
});
