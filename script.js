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
    resultValue = num1 / num2
}

// define variables to store values of current value, operator and modifier value

let baseValue = null
let operator = null
let modifierValue = null
let resultValue = null

let isWaitingForNum = true
let isWaitingForDecimals = false
let nextOperatorIsEqualSign = false


// function that takes INPUT VARIABLES (two numbers & oeprator) and calls 1 of the 4 math operator function defined above

function operate() {
   
   switch(operator) {
        case "+":
            return add(baseValue, modifierValue)
            break;
        case "-":
            return subtract(baseValue, modifierValue)
            break;
        case "*":
            return multiply(baseValue, modifierValue)
            break;
        case "/":
            return divide(baseValue, modifierValue)
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

        if (isWaitingForDecimals) {
            if (!mainDisplay.textContent) {
                mainDisplay.textContent = "0."
            } else mainDisplay.textContent += "."
            isWaitingForDecimals = false
        }

        if (baseValue) {
            nextOperatorIsEqualSign = true
        }

        mainDisplay.textContent += button.textContent
    })
)


// takes textContent and stores it in currentValue (if empty) or modifierValue, assigns operator


const operatorButtons = document.querySelectorAll(".operatorButtons")

operatorButtons.forEach(button =>
    button.addEventListener("click", () => {
        
        if (!baseValue) {
            baseValue = Number(mainDisplay.textContent)
        }

        if (nextOperatorIsEqualSign) {
            modifierValue = Number(mainDisplay.textContent)
            operate()
            mainDisplay.textContent = resultValue

            nextOperatorIsEqualSign = false
        }

        if (resultValue) {
            baseValue = resultValue
            modifierValue = null
        }
        
        operator = button.textContent

        isWaitingForNum = true
        isWaitingForDecimals = false
    })
)

// equalButton callbacks math function

const equalButton = document.querySelector("#equalButton")

equalButton.addEventListener("click", () => {
    if (!baseValue) {
        baseValue = Number(mainDisplay.textContent)     
    } else if (!operator) {
        mainDisplay.textContent = baseValue
    }         
    else if (!modifierValue && operator) { 
        modifierValue = Number(mainDisplay.textContent)
        operate()
        mainDisplay.textContent = resultValue
    } else {
        baseValue = resultValue
        operate()
        mainDisplay.textContent = resultValue
    }
    isWaitingForNum = true
    nextOperatorIsEqualSign = false
})  

// function that adds decimal

const decimalButton = document.querySelector("#decimalButton")

decimalButton.addEventListener("click", () => {
    
    if (isWaitingForNum) {
        mainDisplay.textContent = "0."
        isWaitingForNum = false
    }

    if (!mainDisplay.textContent.includes(".")) {
        isWaitingForDecimals = true
    }
})

// function that clears display and resets values

const clearButton = document.querySelector("#clearButton")

clearButton.addEventListener("click", () => {
    baseValue = null
    operator = null
    modifierValue = null
    resultValue = null
    
    isWaitingForNum = true
    isWaitingForDecimals = false
    nextOperatorIsEqualSign = false
    
    mainDisplay.textContent = 0
})

//easy log function

function log() {
    console.log(isWaitingForDecimals)
}