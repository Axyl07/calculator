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
const numberButton = document.querySelectorAll(".numberButtons button");
const operatorButton = document.querySelectorAll(".EvaluationButtons button")
const equalButton = document.querySelector("#equal");
const clear = document.querySelector("#clear");
let displayValue = display.textContent;

let firstNum;
let secondNum;
let operator;

const getNumber = numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    display.textContent += button.textContent;
    if (firstNum) {
      secondNum = button.textContent;
    } else firstNum = button.textContent;
      // console.log(firstNum);
      // return firstNum;
  });
});

operatorButton.forEach((button) => {
    button.addEventListener("click", () => {
      operator = button.textContent;
      display.textContent = " "
 
    })
})

equalButton.addEventListener("click", () => {
  console.log(firstNum)
  console.log(secondNum)
  console.log(operator)
  display.textContent = operate(firstNum, secondNum, operator);
  console.log(operate(firstNum, secondNum, operator));
})
clear.addEventListener("click", () => {
    delete displayValue
})