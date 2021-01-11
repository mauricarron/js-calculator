console.log("Hello World");

function createNumButtons() {
  const inputNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const $inputNum = document.querySelector("#input-num");

  inputNumbers.forEach((num) => {
    const span = document.createElement("span");
    span.setAttribute("id", `${num}`);
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
    span.setAttribute("id", `${oper}`);
    span.classList.add("btn");
    span.textContent = `${oper}`;
    $inputCalc.appendChild(span);
  });
}
createCalcButtons();

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  return operator(a, b);
}
