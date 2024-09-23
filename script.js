const add = function (num1, num2) {
  return num1 + num2;
};

const sub = function (num1, num2) {
  return num1 - num2;
};

const multiply = function (num1, num2) {
  return num1 * num2;
};

const divide = function (num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Erm what the sigma 🤔";
  }
};

const operate = function (first, second, operator) {
  switch (operator) {
    case "+":
      return add(first, second);  
    case "-":
      return sub(first, second);
    case "*":
      return multiply(first, second);
    case "/":
      return divide(first, second);
    default:
        "Enter valid numbers";
        break;
    }
};

const display = document.querySelector("#display");

// const button = document.querySelectorAll("button");

const numberButton = document.querySelectorAll(".numberButtons button");
const operatorButton = document.querySelectorAll(".EvaluationButtons button")
const equalButton = document.querySelector("#equal");
const clear = document.querySelector("#clear");
let displayValue = display.textContent;

let firstNum;
let secondNum;
let operator;

const getNumber = numberButton.forEach((numbutton) => {
  numbutton.addEventListener("click", () => {
    display.textContent += numbutton.textContent;
    if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
      secondNum = display.textContent;
      secondNum = parseFloat(secondNum);
    } else {
      firstNum = display.textContent;
      firstNum = parseFloat(firstNum);
    }

    console.log("fist num is "+firstNum);
    console.log("second is "+secondNum);
  });
});

operatorButton.forEach((opbutton) => {
  opbutton.addEventListener("click", () => {
    display.textContent = opbutton.textContent;
      operator = opbutton.textContent;
      display.textContent = ""
 
    })
})

equalButton.addEventListener("click", () => {
  display.textContent = operate(firstNum, secondNum, operator);
  console.log(operate(firstNum, secondNum, operator));
})
clear.addEventListener("click", () => {
  display.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
})