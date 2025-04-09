// Function Declaration
function greet(name) {
    return "Hello, " + name;
}

// Function Parameters
function multiply(a, b) {
    return a * b;
}

// Function Return Value
function square(n) {
    return n * n;
}

// Function Expression
const greetExpr = function (name) {
    return "Hello, " + name;
};

// Arrow Function
const add = (a, b) => a + b;

// Anonymous Function (used as a callback)
setTimeout(function () {
    console.log("Hello after 1 second");
}, 1000);
