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
// function boom() {
//     boom(); // infinite recursion
// }

// boom(); // RangeError: Maximum call stack size exceeded

// Variable and Hoisting
// using var
console.log(p); // undefined
var p = 10;

// using let
console.log(q); // ReferenceError: Cannot access 'q' before initialization
let q = 20;

// using const
console.log(r); // ReferenceError
const r = 30;

let person = { name: "Bob", age: 30 };   // Object
let scores = [90, 85, 88];               // Array
function greet() { console.log("Hi"); }  // Function

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4

// while loop
let j = 0;
while (j < 5) {
    console.log(i);
    j++;
}
// Output: 0 1 2 3 4

// do ... while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
// Output: 0 1 2 3 4