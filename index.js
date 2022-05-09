function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "undefined";
    }
    return a / b;
}

function operate(operator, a, b) {
    return operator(a, b);
}

let displayText = "0";
let saved = 0;
current = 0;
operator = add;

const buttons = document.querySelectorAll(".btn");
const display = document.querySelector("h1");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");
const multiplyButton = document.querySelector("#multiply");
const divideButton = document.querySelector("#divide");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

addButton.addEventListener("click", () => {
    if (!current || current === 0) {
        saved = display.textContent;
    } else {
        saved = operate(operator, parseFloat(saved), parseFloat(current));
    }
    display.textContent = "";
    if (operator != add) {
        operator = add;
    }
    console.log(saved, current);
});

subtractButton.addEventListener("click", () => {
    if (!current || current === 0) {
        saved = display.textContent;
    } else {
        saved = operate(operator, parseFloat(saved), parseFloat(current));
    }
    display.textContent = "";
    if (operator != subtract) {
        operator = subtract;
    }
});

multiplyButton.addEventListener("click", () => {
    if (!current || current === 0) {
        saved = display.textContent;
    } else {
        saved = operate(operator, parseFloat(saved), parseFloat(current));
    }
    display.textContent = "";
    if (operator != multiply) {
        operator = multiply;
    }
});

divideButton.addEventListener("click", () => {
    if (!current || current === 0) {
        saved = display.textContent;
        console.log("yessir")
    } else {
        saved = operate(operator, parseFloat(saved), parseFloat(current));
    }
    display.textContent = "";
    if (operator != divide) {
        operator = divide;
    }
});

clearButton.addEventListener("click", () => {
    display.textContent = "";
    saved = 0;
    console.log(saved, current);
})

equalsButton.addEventListener("click", () => {
    if (current) {
        display.textContent = operate(operator, parseFloat(saved), parseFloat(current));
        console.log(display.textContent);
    }
    saved = display.textContent;
    current = null;
})

buttons.forEach(button => {
    button.addEventListener("click", () => updateText(button.textContent))
});

function updateText(buttonTextContent) {
    if (display.textContent.length < 16) {
        display.textContent += buttonTextContent;
    }
    current = parseFloat(display.textContent);
    console.log(saved, current);
}

function clearDisplayText() {

}

function clearDisplayTextAndCalculateResult() {

}