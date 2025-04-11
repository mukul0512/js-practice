/*

* Math.random() - how do they work
* Difference between bracket notation and . notation to access element from an object
* ["name"] vs .name
* Fibonacci series dry run
* Dry run of all the pattern print using loop

*/


// Math.random() * (max - min) + min
// 0 <= Math.random() < 1  // default range

// Example 1
// Random decimal between 5 and 10
let rand = Math.random() * (10 - 5) + 5;
console.log(rand);

// ------------------------------------------------------------


// Math.floor(Math.random() * (max - min + 1)) + min

// Example 2
// Random integer between 1 and 6
let randNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
console.log(randNum);

// ------------------------------------------------------------------------

// To calculate random num of 10 digit
function generateRandomNumber() {
    const x = Math.random() * 10000000000;
    const value = x;
    return Math.floor(value)
}

console.log(generateRandomNumber(2));

// ----------------------------------------------------------------

// Recursion - Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(count) {
    for (let i = 0; i < count; i++) {
        console.log(fibonacci(i));
    }
}
printFibonacciSeries(7);

// ---------------------------------------------------------------------

// Using loop
function fibonacci(n) {
    let a = 0, b = 1;
    if (n === 0) return 0;
    if (n === 1) return 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
function printFibonacciSeries(count) {
    for (let i = 0; i < count; i++) {
        console.log(fibonacci(i));
    }
}
printFibonacciSeries(7);

// Call by value 

let p = 5;
let q = p;
q = 10;
console.log(q);
console.log(p);

// Call by reference

let obj1 = { name: "Karnwal" };
let obj2 = obj1; // because holds same memory
obj2.name = "Mukul";
console.log(obj1);
console.log(obj2);

let x = 5;
function Parent() {
    const name = "Ram";
    function Child() {
        console.log(name);
    }
    return Child;
}
const y = Parent();
y()

const obj = {
    name: "ram",
    age: 25,
    address: "Delhi"
}
const prop = "name";
console.log(obj[prop])

// call by value

// call by reference
function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const array = [1, 2];
swap(0, 1, array);
console.log(array[0] + " " + array[1])

// fibonacci series

/**
 * 0
 * 1
 * 1
 * 2
 * 3
 * 5
 * 8
 * 13
 * 
 */
// 5

// Fibonacci algorithm
// step 1 make a function 
// step 2 base case n <= 1 return n;
// step 3 return fibonacci(n-1) + fibonacci(n-2)

// function fibonacci(n){
//     if(n <= 1) return n;

//     return fibonacci(n-1) + fibonacci(n-2);
// }
// for(let i=0;i<=5;i++){
//     const x = fibonacci(i);
//     console.log(x);
// }
// function printFibo(n){
//     for(let i=0;i<n;i++){
//         const x = fibonacci(i);
//         // console.log(x);
//     }
// }
// console.log(printFibo(5));

// Understand variable scope: global scope, function scope, and block scope.

let name = "Ram"; // global scope

function Outer() {
    let name = "Site";
    // heavy computaion
    function Inner() {
        console.log(name);
    }
    return Inner;
}
const printName = Outer();
printName();


function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier; // Multiply input number by multiplier
    };

}
const child = createMultiplier(5);
console.log(child(3))
console.log(child(4))


// function createMultiplier(multiplier) {
// // Return a new function
// return function(number) {
//     return number * multiplier; // Multiply input number by multiplier
// };
// }

const double = createMultiplier(2); // Function to double a number
const triple = createMultiplier(3); // Function to triple a number

console.log(double(5)); // 10
console.log(triple(5)); // 15

/**


 */


// ------------------------------------------------------------------------------------

/*
Today's task

Print table 5*1=5 …
Understand variable scope: global scope, function scope, and block scope.
10 digit number generate using Math.random
Palindrome num check
Swap two no. with (inside an array) and without extra variable
Scope - global and block
Call by reference - non primitive data types like object
Mastering in loops, if …else, recursion
Fibonacci Algo.
Closure example using multiplier.

*/

// Print table 5*1=5 …

// using recursion
const PrintTable = (n, i = 1) => {
    if (i > 10) return;
    console.log(`${n} * ${i} = ${n * i}`);
    PrintTable(n, i + 1);
}
PrintTable(5);

// ------------------------------------------------------

// Using for loop

const CalculateResult = (n, i) => {
    let res = n * i;
    return `${n} * ${i} = ${res}`;
};

for (let i = 1; i <= 10; i++) {
    const x = CalculateResult(5, i);
    console.log(x);
}

// ------------------------------------------------------------------