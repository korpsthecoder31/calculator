// functions of the four basic mathematical operations. add 1 multiply result to fix to limit decimal to 8 places.

function add(num1, num2) {
    resultValue = num1 + num2
    resultValue = 1 * resultValue.toFixed(8)
    return resultValue 
}

function subtract(num1, num2) {
    resultValue = num1 - num2
    resultValue = 1 * resultValue.toFixed(8)
    return resultValue 
}

function multiply(num1, num2) {
    resultValue = num1 * num2
    resultValue = 1 * resultValue.toFixed(8)
    return resultValue 
}

function divide(num1, num2) {
    if (num2 === 0) {
        resultValue = "- Error. Undefined -"
    } else  resultValue = num1 / num2
            resultValue = 1 * resultValue.toFixed(8)
            return resultValue 
}

// variables to store values and modifiers

let baseValue = null
let operator = null
let modifierValue = null
let resultValue = null

// conditional variables that determines how values respond

let isWaitingForNum = true
let isWaitingForDecimals = false
let nextOperatorIsEqualSign = false
let canBackspace = false


// function that takes input varialbes (baseValue, modifierValue and operator) and calls 1 of the 4 math operator function defined above

function operate() {
   
   switch(operator) {
        case "+":
            add(baseValue, modifierValue)
            break;
        case "-":
            subtract(baseValue, modifierValue)
            break;
        case "*":
            multiply(baseValue, modifierValue)
            break;
        case "/":
            divide(baseValue, modifierValue)
            break;
   }

   mainDisplay.textContent = resultValue
   canBackspace = false

}

// define calculator display as variable

const mainDisplay = document.querySelector("#mainDisplay")

mainDisplay.textContent = 0

// functions that handles number inputs

const numButtons = document.querySelectorAll(".numButtons")

numButtons.forEach(button =>
    button.addEventListener("click", () => {

        handleNums(button.textContent)

    })
)

document.addEventListener("keydown", (event) => {

    const regexNum = /^[0-9]/
    const input = event.key

    if (regexNum.test(input)) {
        handleNums(input)
    }
})

function handleNums(numInput) {

    canBackspace = true

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

    mainDisplay.textContent += numInput
}


// takes textContent and stores it in currentValue (if empty) or modifierValue, 
// then assigns operator. operates if necessary


const operatorButtons = document.querySelectorAll(".operatorButtons")

operatorButtons.forEach(button =>
    button.addEventListener("click", () => {
        
        handleOperator(button.textContent)
        
    })
)

document.addEventListener("keydown", (event) => {
    
    const regexOperator = /^[+\-*/]/
    const input = event.key

    if (regexOperator.test(input)) {
        handleOperator(input)
    }

})

function handleOperator(opInput) {
    if (!baseValue) {
        baseValue = Number(mainDisplay.textContent)
    }

    if (nextOperatorIsEqualSign) {
        modifierValue = Number(mainDisplay.textContent)
        operate()

        nextOperatorIsEqualSign = false
    }

    if (resultValue) {
        baseValue = Number(mainDisplay.textContent)
        modifierValue = null
    }
    
    operator = opInput

    isWaitingForNum = true
    isWaitingForDecimals = false
}

// equalButton callbacks math function

const equalButton = document.querySelector("#equalButton")

equalButton.addEventListener("click", () => {
    equalSign()
})

document.addEventListener("keydown", (event) => {
    if (event.key === "=" || event.key === "Enter") {
        equalSign()
    }
})

function equalSign() {
    if (isNaN(resultValue)) {
        return mainDisplay.textContent = "- Error. Undefined -"
    }
    
    if (!operator) {
        baseValue = Number(mainDisplay.textContent)
    }         
    else if (!modifierValue && operator) { 
        modifierValue = Number(mainDisplay.textContent)
        operate()
        
    } else {
        baseValue = resultValue
        operate()
        baseValue = null
        
    }
    isWaitingForNum = true
    nextOperatorIsEqualSign = false
}

// function that adds decimal

const decimalButton = document.querySelector("#decimalButton")

decimalButton.addEventListener("click", () => {
    addDecimal() 
})

document.addEventListener("keydown", (event) => {
    if (event.key === ".") {
        addDecimal()
    }
})

function addDecimal() {
    if (isWaitingForNum) {
        mainDisplay.textContent = "0"
        isWaitingForNum = false
    }

    if (!mainDisplay.textContent.includes(".")) {
        isWaitingForDecimals = true
    }
}

// function that acts as backspace

const deleteButton = document.querySelector("#deleteButton")

deleteButton.addEventListener("click", () => {
    backspace()
})

document.addEventListener("keydown", (event) =>{
    if (event.key === "Backspace" || event.key === "Delete") {
        backspace()
    }
})

function backspace() {
    if (canBackspace) {
        mainDisplay.textContent = mainDisplay.textContent.slice(0, -1)
    }
}

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
    canBackspace = false
    
    mainDisplay.textContent = 0
})


