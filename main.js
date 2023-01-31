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
}


function operate (operator, a, b) {
    let result = 0;
    a = num1;
    b = num2;
    switch(operator) {
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
}
