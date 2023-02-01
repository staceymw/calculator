function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    if (b === 0) {
        display.innerText("Cannot divide by 0.");
        clear();
        current.innerText = "0"
    }
    return a / b;
};

function percent (a, b) {
    return a  * (b / 100);
};


function operate (op, a, b) {
    let result = 0;
    a = Number(a);
    b = Number(b);
    switch(op) {
        case "add":
            result = add(a, b)
            break;
        case "subtract":
            result = subtract(a, b)
            break;
        case "multiply":
            result = multiply(a, b)
            break;
        case "divide":
            result = divide(a, b)
            break;
        case "percent":
            result = percent(a, b)
            default:
                break;       
    }
    return result;
};

const numberButtons = document.querySelectorAll(".number");
const opButtons = document.querySelectorAll(".operation");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");

let currentOp = "";
let displayValue = "";
let previousVal = "";
let currentVal = "";
let computed = false;

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
        updateDisplay();
    })
});

opButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
        updateDisplay();
    })
});

equals.addEventListener("click", () => {
    compute();
});

clear.addEventListener("click", () => {
    clearAll();
});

function appendNumber(number) {
    if (number === "." && current.innerText.includes(".")) {
    return;
}
    if (computed) {
        currentVal = "";
        displayVal = "";
        current.innerText = "";
        computed = false
    }
    displayValue += number;
    if (number !== ".") {
        currentVal += number
    }
};

function updateDisplay() {
    current.innerText = displayValue;
    currentVal = +current.innerText;
};

function compute() {
    if (currentOp !== "") {
        console.log(previousVal, currentVal);
        let result = operate(currentOP, previousVal, currentVal);
        if (result || result === 0) {
            if (result.toString().length > 8) {
                current.innerText = result.toFixed(6);
                currentVal = result.toFixed(6);
            } else {
                current.innerText = result;
                currentVal = result;
            }
            previousVal = "";
            previous.innerText = "";
            computed = true;
            currentOp = "";
        }
    }
}

function handleOperator(op) {
    if (currentOp && !current.innerText) {
        return
    }
    if (previous.innerText && current.innerText) {
    let newOp = previous.innerText(previous.innerText.length - 1);
    let result = operate(newOp, previousVal, currentVal);
    previous.innerText = `${result}${op}`;
    previousVal = result;
    currentOp = op;
    current.innerText = "";
    currentVal = "";
    displayVal = "";
    return;
    }
    
    previous.innerText = current.innerText;
    previousValue = currentValue;
    currentOp = op;
    current.innerText = "";
    currentVal = "";
    previous.innerText += `${op}`;
    displayValue = "";
}

function clearAll() {
    displayValue = "";
    previousValue = "";
    currentValue = "";
    currentOp = "";
    previous.innerText = "";
    displayValue = "";
}