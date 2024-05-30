const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    const expression = display.value;
    try {
        display.value = math.evaluate(expression);
    } catch (err) {
        console.error('Invalid expression', err);
        display.value = "Error";
    }
}

function reverseValue() {
    const expression = display.value;
    try {
        display.value = math.multiply(expression, -1);
    } catch (err) {
        console.error('Invalid expression', err);
        display.value = "Error";
    }
}

function divideByHundred() {
    const expression = display.value;
    try {
        display.value = math.divide(expression, 100);
    } catch (err) {
        console.error('Invalid expression', err);
        display.value = "Error";
    }
}