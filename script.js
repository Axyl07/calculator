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
      return add(first, second).toFixed(2);  
    case "-":
      return sub(first, second).toFixed(2);
    case "*":
      return multiply(first, second).toFixed(2);
    case "/":
      if (second == 0) {
        return "Erm what the sigma 🤔";
      }
      else return divide(first, second).toFixed(2);
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
const displayValue = display.textContent;
const decimal = document.querySelector('#decimal');
const backspace = document.querySelector('#backspace');


let firstNum;
let secondNum;
let operator;

const getNumber = numberButton.forEach((numbutton) => {
  numbutton.addEventListener("click", () => {
    
    display.textContent += numbutton.textContent;
      if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
        secondNum = display.textContent;
        if (secondNum.includes('.')) {
          decimal.disabled = true;
        }
        else decimal.disabled = false;
        secondNum = parseFloat(secondNum);
      } else {
        firstNum = display.textContent;
        if (firstNum.includes('.')) {
          decimal.disabled = true;
        }
        else decimal.disabled = false;
        firstNum = parseFloat(firstNum);
      }
    
    console.log("fist num is "+firstNum);
    console.log("second is "+secondNum);
  });
});



// --------------------------------------keyboard part -------------------------------------
// document.addEventListener("keydown", (event) => {
//    numberButton.forEach(button => {
//        if (button.textContent == event.key) {
//            display.textContent += event.key
//        }
     
//    })
//    operatorButton.forEach(opbutton => {
//       if (opbutton.textContent == event.key) {
//         display.textContent += event.key
//     }
//         display.textContent = ""  
//    })
//    if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
//     secondNum = display.textContent;
//     if (secondNum.includes('.')) {
//       decimal.disabled = true;
//     }
//     else decimal.disabled = false;
//     secondNum = parseFloat(secondNum);
//   } else {
//     firstNum = display.textContent;
//     if (firstNum.includes('.')) {
//       decimal.disabled = true;
//     }
//     else decimal.disabled = false;
//     firstNum = parseFloat(firstNum);
//   }
//    equalButton.addEventListener("click", () => {
//     let result = operate(firstNum, secondNum, operator);
//     display.textContent = result;
    
//     console.log(result);
//   })
// })

operatorButton.forEach((opbutton) => {
  opbutton.addEventListener("click", () => {
    display.textContent = opbutton.textContent;
      operator = opbutton.textContent;
      display.textContent = ""
 
    })
})

equalButton.addEventListener("click", () => {
  let result = operate(firstNum, secondNum, operator);
  display.textContent = result;
  
  console.log(result);
})
clear.addEventListener("click", () => {
  display.textContent = "";
  firstNum = "";
  secondNum = "";
  operator = "";
})

backspace.addEventListener("click", () => {
  display.textContent = display.textContent.substring(0, display.textContent.length - 1);
  if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
    secondNum = display.textContent;
    secondNum = parseFloat(secondNum);
  } else {
    firstNum = display.textContent;
    firstNum = parseFloat(firstNum);
  }
})