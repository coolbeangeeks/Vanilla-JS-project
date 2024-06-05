// Selecting elements
const textContainer = document.getElementById("text-container");
const mathOperators = document.querySelectorAll(".math-ops");
const digits = document.querySelectorAll(".numeric");
const sideButtons = document.querySelectorAll(".side");

// Variables to track calculator state
let displayValue = "0"; // Initial display value
let currentOperator = null;
let prevValue = null;
let shouldResetDisplay = false;

// Function to update the display
function updateDisplay() {
    textContainer.textContent = displayValue;
}

// Function to handle digit button clicks
function handleDigitClick(event) {
    const digitValue = event.target.textContent;

    if (shouldResetDisplay) {
        displayValue = digitValue;
        shouldResetDisplay = false;
    } else {
        displayValue = (displayValue === "0") ? digitValue : displayValue + digitValue;
    }

    updateDisplay();
}

// Function to handle operator button clicks
function handleOperatorClick(event) {
    const operator = event.target.textContent;

    if (currentOperator !== null) {
        evaluate(); // Evaluate the expression if an operator already exists
    }

    currentOperator = operator;
    prevValue = displayValue;
    shouldResetDisplay = true;
}

// Function to handle "AC" button click
function handleACClick() {
    displayValue = "0";
    currentOperator = null;
    prevValue = null;
    shouldResetDisplay = false;
    updateDisplay();
}

// Function to handle "=" button click
function handleEqualClick() {
    evaluate();
}

// Function to evaluate the expression and update display
function evaluate() {
    const currentValue = parseFloat(displayValue);
    const prevNumber = parseFloat(prevValue);

    if (isNaN(currentValue) || isNaN(prevNumber)) return;

    switch (currentOperator) {
        case '+':
            displayValue = prevNumber + currentValue;
            break;
        case '-':
            displayValue = prevNumber - currentValue;
            break;
        case '*':
            displayValue = prevNumber * currentValue;
            break;
        case '%':
            displayValue = prevNumber % currentValue;
            break;
        default:
            return;
    }

    displayValue = displayValue.toString(); // Convert result to string
    currentOperator = null;
    prevValue = null;
    shouldResetDisplay = true;
    updateDisplay();
}

// Adding event listeners
digits.forEach(digit => {
    digit.addEventListener('click', handleDigitClick);
});

mathOperators.forEach(operator => {
    operator.addEventListener('click', handleOperatorClick);
});

sideButtons.forEach(side => {
    side.addEventListener('click', () => {
        if (side.textContent === 'AC') {
            handleACClick();
        } else if (side.textContent === '=') {
            handleEqualClick();
        } else {
            handleDigitClick(event);
        }
    });
});
