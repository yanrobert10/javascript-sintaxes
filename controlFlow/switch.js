// switch

function Calculate(number1, operador, number2) {
    let result = 0;

    switch (operador) {
        case "+":
            result = number1 + number2;
            break
        case "-":
            result = number1 - number2;
            break
        case "*":
            result = number1 * number2;
            break
        case "/":
            result = number1 / number2;
            break
            default:
                console("Não implementado");
                break
    }
    
    return result;
}

console.log(Calculate(1, "+", 2));