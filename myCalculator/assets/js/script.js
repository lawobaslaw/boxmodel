const calculator = {
    displayValue: '0',
    firstOperation: null,
    waitSecondOperation: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue, waitSecondOperation } = calculator;

    if (waitSecondOperation === true) {
        calculator.displayValue = digit;
        calculator.waitSecondOperation = false;
    } else {
        calculator.displayValue =
            // Overwrite `displayValue` if the current value is '0' otherwise append to it
            displayValue === '0' ? digit : displayValue + digit;
    }
}

function inputDecimal(dot) {
    if (calculator.waitSecondOperation === true) {
        calculator.displayValue = '0.';
        calculator.waitSecondOperation = false;
        return;
    }
    //incase dot already exist would not add another
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperation, displayValue, operator } = calculator;
    const inputValue = parseFloat(displayValue);

    if (operator && calculator.waitSecondOperation) {
        calculator.operator = nextOperator;
        return;
    }

    if (firstOperation == null && !isNaN(inputValue)) {
        calculator.firstOperation = inputValue;
    } else if (operator) {
        const currentValue = firstOperation || 0;
        const result = calculate(currentValue, inputValue, operator);

        calculator.displayValue = String(result);
        calculator.firstOperation = result;
    }

    calculator.waitSecondOperation = true;
    calculator.operator = nextOperator;
}

function calculate(firstOperation, secondOperation, operator) {
    if (operator === '+') {
        return firstOperation + secondOperation;
    } else if (operator === '-') {
        return firstOperation - secondOperation;
    } else if (operator === '*') {
        return firstOperation * secondOperation;
    } else if (operator === '/') {
        return firstOperation / secondOperation;
    }

    return secondOperation;
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperation = null;
    calculator.waitSecondOperation = false;
    calculator.operator = null;
}

function updateDisplay() {
    const display = document.querySelector('.calculator-display');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-btns');
keys.addEventListener('click', event => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});