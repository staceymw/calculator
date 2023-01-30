
function operate (operator, a, b) {
    switch(operator) {
        case "add":
            display.textContent = a + b
            break;
        case "subtract":
            display.textContent = a - b
            break;
        case "multiply":
            display.textContent = a * b
            break;
        case "divide":
            display.textContent = a / b
            break;       
    }
};            
                   
                   
                   
                    /*function add (a, b) {
                        return a + b;
                    };
                    
                    function subtract (a, b) {
                        return a - b;
                    };
                    
                    function multiply (a, b) {
                        return a * b;
                    };
                    
                    function divide (a, b) {
                        return a / b;
                    };


                    function operate (operator a, b)
                        operator = operation;
                        a = firstNumber;
                        b = secondNumber;
                        if (operator == "+") {
                            return result = add(a, b);
                        } else if (operator == "-") {
                            return result = subtract(a,b);
                        } else if (operator == "*") {
                            return result = multiply(a, b);
                        } else {
                            return result = divide(a, b);
                        };*/
