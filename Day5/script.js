/*

* Math.random() - how do they work
* Difference between bracket notation and . notation to access element from an object
* ["name"] vs .name
* Fibonacci series dry run
* Dry run of all the pattern print using loop

*/

// Random decimal between 5 and 10

// Math.random() * (max - min) + min
// 0 <= Math.random() < 1  // default range

// Example 1
// let rand = Math.random() * (10 - 5) + 5;
// console.log(rand);

// ------------------------------------------------------------

// Random integer between 1 and 6

// Math.floor(Math.random() * (max - min + 1)) + min

// Example 2
// let randNum = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
// console.log(randNum);

// ------------------------------------------------------------------------

// Recursion - Fibonacci
// function fibonacci(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }

// function printFibonacciSeries(count) {
//     for (let i = 0; i < count; i++) {
//         console.log(fibonacci(i));
//     }
// }
// printFibonacciSeries(7);

// ---------------------------------------------------------------------

// Using loop
// function fibonacci(n) {
//     let a = 0, b = 1;
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     for (let i = 2; i <= n; i++) {
//         let temp = a + b;
//         a = b;
//         b = temp;
//     }
//     return b;
// }
// function printFibonacciSeries(count) {
//     for (let i = 0; i < count; i++) {
//         console.log(fibonacci(i));
//     }
// }
// printFibonacciSeries(7);

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