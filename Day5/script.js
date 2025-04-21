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
function fibonacciSeries(numb1) {
    if (numb1 <= 1) {
        return numb1;
    }
    return fibonacciSeries(numb1 - 1) + fibonacciSeries(numb1 - 2);
}

function printFibonacciSeries(count) {
    for (let i = 0; i < count; i++) {
        console.log(fibonacciSeries(i));
    }
}
printFibonacciSeries(7);

// ---------------------------------------------------------------------

// Using loop
function fibonacci(numb2) {
    let x = 0, y = 1;
    if (numb2 === 0) return 0;
    if (numb2 === 1) return 1;
    for (let i = 2; i <= numb2; i++) {
        let temp = x + y;
        x = y;
        y = temp;
    }
    return y;
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

// call by value
const obj = {
    name: "ram",
    age: 25,
    address: "Delhi"
}
const prop = "name";
console.log(obj[prop])

// call by reference
function swap(a, b, arr) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
const arr = [1, 2];
swap(0, 1, arr);
console.log(arr[0] + " " + arr[1])

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

function fibo(nu) {
    if (nu <= 1) return nu;

    return fibo(nu - 1) + fibo(nu - 2);
}
for (let i = 0; i < 5; i++) {
    const z = fibo(i);
    console.log(z);
}
function printFibo(nu) {
    for (let i = 0; i < nu; i++) {
        const z = fibo(i);
        console.log(z);
    }
}
console.log(printFibo(5));

// Understand variable scope: global scope, function scope, and block scope.

let name1 = "Ram"; // global scope
function Outer() {
    let name1 = "Sita";
    // heavy computaion
    function Inner() {
        console.log(name1);
    }
    return Inner;
}
const printName2 = Outer();
// printName2();

// ----------------------------------------------------------------------------
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier; // Multiply input number by multiplier
    };

}
const child = createMultiplier(5);
console.log(child(3));
console.log(child(4));

const double = createMultiplier(2); // Function to double a number
const triple = createMultiplier(3); // Function to triple a number

console.log(double(5)); // 10
console.log(triple(5)); // 15

/**


 */


// ------------------------------------------------------------------------------------

/*
Today's task

* Print table 5*1=5 …
* Understand variable scope: global scope, function scope, and block scope.
* 10 digit number generate using Math.random
* Palindrome num check
* Swap two no. with (inside an array) and without extra variable
* Scope - global and block
* Call by reference - non primitive data types like object
* Mastering in loops, if …else, recursion
* Fibonacci Algo.
* Closure example using multiplier.
* Rest vs Spread Operator.
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

// Check Palindrome ex num = 121
const reverseNumb = (n, rev = 0) => {
    if (n === 0) return rev;
    return reverseNumb(Math.floor(n / 10), rev * 10 + (n % 10));
};
const IsPalind = (n) => {
    const reversed = reverseNumb(n);
    return n === reversed;
};
const num1 = 121;
console.log(`${num1} is palindrome?`, IsPalind(num1));

// --------------------------------------------------------------------------

// using for loop - Example num = 121

/*
rev = 0
 n = 121
n % 10;
n / 10 
rev = rev * 10 + digit;

*/
const reverseNumber = (n) => {
    let rev = 0;
    for (let num = n; num > 0; num = Math.floor(num / 10)) {   // n
        let digit = num % 10;   // 
        rev = rev * 10 + digit;
    }
    return rev;
};
const IsPalindrome = (n) => {
    const reversed = reverseNumber(n);
    return n === reversed;
};
const num = 1;
console.log(Math.floor(1 / 10));

console.log(`${num} is palindrome`, IsPalindrome(num));


// ------------------------------------------------------------------

let name = "Ram"; // global scope
function Outer() {
    let name = "Sita";
    // heavy computaion
    function Inner() {
        console.log(name);
    }
    return Inner;
}
const printName = Outer();
printName();


// ---------------------------------------------------------------------

/*
Rest Operator - Used in function parameters to collect remaining arguments into an array.

*/
// Example of rest operator
function sum(...numbers) {
    console.log(numbers);
    return numbers.reduce((acc, num) => acc + num, 0);
}

const final = sum(1, 2, 3, 4);
console.log(final);


// ---------------------------------------------------------------------------------

/*
Spread Operator - Used to expand an iterable (like an array or object) into individual elements.

*/
// Example of Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2);

const objec1 = { a3: 1, b3: 2 };
const objec2 = { ...objec1, c3: 3 };
console.log(objec2);

// --------------------------------------------------------------------------------------

const multiply = (multiplier, ...bakiKaData) => {
    console.log(multiplier);

    console.log(bakiKaData);

    for (let i = 0; i < bakiKaData.length; i++) {
        console.log(bakiKaData[i] * multiplier);
    }
    return 5;
}
const temp = () => 5;
console.log(temp());

const returnedValue = multiply(2, 1, 2, 3, 4, 5, 6, 7)
console.log(returnedValue);
// const arr = multiply(2, 1, 2, 3);
// console.log(arr);

// ------------------------------------------------------------

function outside() {
    const s = 5;
    function inside(s) {
        return s * 2;
    }
    return inside;
}
console.log(outside())
const s = outside();
console.log(s(2));
console.log(outside()(1));