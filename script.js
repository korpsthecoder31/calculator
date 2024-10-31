// functions of the four basic mathematical operations

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "undefined"
    }
    return num1 / num2
}

// define variables to store values of current value, operator and modifier value

let currentValue = null
let operator = null
let modifierValue = null

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

// define calculator display as variable

const mainDisplay = document.querySelector("#mainDisplay")


// edits textContent of mainDisplay onclick of numButtons

const numButtons = document.querySelectorAll(".numButtons")

numButtons.forEach(button =>
    button.addEventListener("click", () => {
        mainDisplay.textContent += button.textContent
    })
)


// takes textContent and stores it in currentValue (if empty) or modifierValue, assigns operator


const operatorButtons = document.querySelectorAll(".operatorButtons")

operatorButtons.forEach(button =>
    button.addEventListener("click", () => {
        operator = button.textContent
        if (currentValue === null) {
            currentValue = parseInt(mainDisplay.textContent)
        } else modifierValue = parseInt(mainDisplay.textContent)
        mainDisplay.textContent = ""
        console.log(currentValue)
        console.log(operator)
        console.log(modifierValue)
    })
)

// function that clears display

const clearButton = document.querySelector("#clearButton")

clearButton.addEventListener("click", () => {
    currentValue = null
    operator = null
    modifierValue = null
    mainDisplay.textContent = ""
})


// unused variables

const equalButton = document.querySelector("#equalButton")