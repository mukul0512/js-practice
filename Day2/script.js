// Global Execution Context
var x = 10;
function greet() {
    console.log("Hello!");
}

// Function Execution Context
function add(a, b) {
    var result = a + b;
    return result;
}
add(2, 3);

// Eval Execution Context
eval("var x = 5;");
console.log(x); // 5

// Execution Stack
function greet() {
    sayHi();
}

function sayHi() {
    console.log("Hello!");
}
greet();

// Stack overflow
function boom() {
    boom(); // infinite recursion
}

boom(); // Maximum call stack size exceeded
