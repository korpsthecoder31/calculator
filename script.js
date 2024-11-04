// functions of the four basic mathematical operations

function add(num1, num2) {
    resultValue = num1 + num2
}

function subtract(num1, num2) {
    resultValue = num1 - num2
}

function multiply(num1, num2) {
    resultValue = num1 * num2
}

function divide(num1, num2) {
    if (num2 === 0) {
        resultValue = "undefined"
    }
    resultValue = num1 / num2
}

// define variables to store values of current value, operator and modifier value

let baseValue = null
let operator = null
let modifierValue = null
let resultValue = null

let isWaitingForNum = true

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

mainDisplay.textContent = 0

// edits textContent of mainDisplay onclick of numButtons

const numButtons = document.querySelectorAll(".numButtons")

numButtons.forEach(button =>
    button.addEventListener("click", () => {
        
        if (isWaitingForNum) {
        mainDisplay.textContent = ""
        isWaitingForNum = false
        }

        mainDisplay.textContent += button.textContent
    })
)


// takes textContent and stores it in currentValue (if empty) or modifierValue, assigns operator


const operatorButtons = document.querySelectorAll(".operatorButtons")

operatorButtons.forEach(button =>
    button.addEventListener("click", () => {
        
        if (!baseValue) {
            baseValue = parseInt(mainDisplay.textContent)
        } else if (!modifierValue && !resultValue) {
            modifierValue = parseInt(mainDisplay.textContent)
            operate(operator, baseValue, modifierValue)
            mainDisplay.textContent = resultValue
        }

        if (resultValue) {
            baseValue = resultValue
            modifierValue = null
            resultValue = null
        }
        
        operator = button.textContent

        isWaitingForNum = true
    })
)

// equalButton callbacks math function

const equalButton = document.querySelector("#equalButton")

equalButton.addEventListener("click", () => {
    if (!baseValue) {
        baseValue = parseInt(mainDisplay.textContent)     
    } else if (!operator) {
        mainDisplay.textContent = baseValue
    }         
    else if (!modifierValue && operator) { 
        modifierValue = parseInt(mainDisplay.textContent)
        operate(operator, baseValue, modifierValue)
        mainDisplay.textContent = resultValue
    } else {
        baseValue = resultValue
        operate(operator, baseValue, modifierValue)
        mainDisplay.textContent = resultValue
    }
    isWaitingForNum = true
})  

// function that clears display and resets values

const clearButton = document.querySelector("#clearButton")

clearButton.addEventListener("click", () => {
    baseValue = null
    operator = null
    modifierValue = null
    resultValue = null
    isWaitingForNum = true
    mainDisplay.textContent = 0
})


//easy log function

function log() {
    console.log(baseValue)
    console.log(operator)
    console.log(modifierValue)
    console.log(resultValue)
}