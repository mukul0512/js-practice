// Calculator using switch
const calculator = (a, b, operator) => {
    let result;
    switch (operator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (b !== 0) {
                result = a / b;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operator';
            break;
    }

    return result;
};

console.log(calculator(8, 2, '+')); // 10
console.log(calculator(8, 2, '-')); // 6
console.log(calculator(8, 2, '*')); // 16
console.log(calculator(8, 2, '/')); // 4
console.log(calculator(8, 0, '/')); // Error: Division by zero
console.log(calculator(8, 2, '%')); // Error: Invalid operator
