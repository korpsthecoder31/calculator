// functions of the four basic mathematical operations

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "undefined";
    }
    return num1 / num2;
}

// define variables to store DISPLAY VALUES of first number, second number and relevant operator

let firstNumDisplay
let operatorDisplay
let secondNumDisplay

// function that takes INPUT VARIABLES (two numbers & oeprator) and calls 1 of the 4 math operator function defined above

function operate(symbol, num1, num2) {
   
   switch(symbol) {
        case "+":
            return add(num1, num2)
            break;
        case "-":
            return subtract(num1, num2)
            break;
        case "*":
            return multiply(num1, num2)
            break;
        case "/":
            return divide(num1, num2)
            break;
   }

}

// function that takes user input, displays and stores into variables

const mainDisplay = document.querySelector("#mainDisplay")

const clearButton = document.querySelector("#clearButton")

const numButtons = document.querySelectorAll(".numButtons")

clearButton.addEventListener("click", () => {
    mainDisplay.textContent = "";
});

numButtons.forEach(button =>
    button.addEventListener("click", () => {
        mainDisplay.textContent += button.textContent
    })
)