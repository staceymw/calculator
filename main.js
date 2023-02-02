let currentNum = "";
let previousNum = "";
let operator = "";

const currentDisplayNumber = document.querySelector(".current-number");
const previousDisplayNumber = document.querySelector(".previous-number");


function compute () {
    previousNum = Number(previousNum);
    currentnum = Number(currentNum);
    
    if (operator === "+") {
        previousNum += currentNum;
    } else if (operator === "-") {
        previousNum -= currentNum;
    } else if (operator === "x") {
        previousNum *= currentNum;
    } else if (operator === "%") {
        previousNum * (currentNum / 100);
    } else if (operator === "/") {
        if (currentNum <= 0) {
            displayResults();
            return;
        }
        previousNum /= currentNum
    }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
};

const clear = document.querySelector(".clear");
clear.addEventListener("click", clearAll);


const equals = document.querySelector(".equals");
equals.addEventListener("click", () => {
    if (currentNum != "" && previousNum != "") {
        compute();
    }
});


const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
        previousNum = "";
        currentDisplayNumber.textContent = currentNum;
    }
    if (currentNum.length <= 8) {
        currentNum += number;
        currentDisplayNumber.textContent = currentNum;
    }
}

const opButtons = document.querySelectorAll(".operator");
opButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    if (previousNum === "") {
        previousNum = currentNum;
        operatorCheck(op);
    } else if (currentNum === "") {
        operatorCheck(op);
    } else {
        compute();
        operator = op;
        currentDisplayNumber.textContent = "0";
        previousDisplayNumber.textContent = previousNum + " " + operator;
    }
}

function operatorCheck(text) {
    operator = text;
    previousDisplayNumber.textContent = previousNum + " " + operator;
    currentDisplayNumber.textContent = "";
    currentNum = "";
}

function clearAll() {
    currentNum = "";
    previousNum = "";
    operator = "";
    currentDisplayNumber.textContent = "0";
    previousDisplayNumber.textContent = "";
}