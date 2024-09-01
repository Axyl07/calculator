const add = function (num1, num2) {
    return num1 + num2;
}

const sub = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    if (num2 !== 0) {
        return num1 / num2;
    }
    else {
        return -1;
    }
}

let first;
let second;
let operator;

const operate = function (first,second,operator) {
    switch (operator) {
        case '+':
            add(first, second);
            break;
        case '-':
            sub(first, second);
            break;
        case '*':
            multiply(first, second);
            break;
        case '/':
            divide(first, second);
            break;
        default:
            'Enter valid numbers'
            break;
    }
}

const display = document.querySelector('#display')
const button = document.querySelectorAll('#numberButtons');
button.addEventlistener('click', () => {
    display.textContent = 'button.textContent'
})