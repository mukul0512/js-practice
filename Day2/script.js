// Global Execution Context
var x = 10;
console.log(x);
function PrintHello() {
    console.log("Hello!");
}
PrintHello(x);

// Function Execution Context
function add(a, b) {
    var result = a + b;
    return result;
}
console.log(add(2, 3));

// Eval Execution Context
eval("var x = 5;");
console.log(x);

// Execution Stack
function PrintHi() {
    sayHi();
}

function sayHi() {
    console.log("Hello!");
}
PrintHi();

// Stack overflow situation
// function boom() {
//     boom(); // infinite recursion
// }

// boom(); // RangeError: Maximum call stack size exceeded

// Variable and Hoisting
// using var
console.log(p); // undefined
var p = 10;

// but using let
// console.log(q); // ReferenceError: Cannot access 'q' before initialization
// let q = 20;

// similarly using const
// console.log(r); // ReferenceError: Cannot access 'r' before initialization
// const r = 30;

let person = { name: "Bob", age: 30 };   // Object
let scores = [90, 85, 88];               // Array
function printHi() {                    // Function
    console.log("Hi");
}

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// Output: 0 1 2 3 4

// while loop
let j = 0;
while (j < 5) {
    console.log(j);
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

// for...of Loop (ES6+) --> Applied in array
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {  //  Looping through an array
    console.log(fruit);
}
// Output:
// apple
// banana
// cherry

let name = "Mukul";
for (let char of name) { //  Looping through a string
    console.log(char);
}
// Output:
// M
// u
// k
// u
// l

let uniqueNum = new Set([1, 2, 3]);
for (let num of uniqueNum) { // Looping through a Set
    console.log(num);
}
// Output: 1 2 3

let userMap = new Map([
    ["name", "Mukul"],
    ["age", 25],
]);

for (let [key, value] of userMap) { // Looping through a Map
    console.log(`${key}: ${value}`);  // template literals
}
// Output:
// name: Mukul
// age: 25

// for ...in loop --> Applied on an object
let person1 = {
    name: "Mukul",
    age: 25,
    city: "Haridwar"
};

for (let key in person1) { // Looping through an object
    console.log(key, person1[key]);
}
// Output:
// name Mukul
// age 25
// city Haridwar

let fruitsName = ["apple", "banana", "cherry"];
for (let index in fruitsName) { // Looping through an array (not recommended)
    console.log(index, fruitsName[index]);
}
// Output:
// 0 apple
// 1 banana
// 2 cherry
