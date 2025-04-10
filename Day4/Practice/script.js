// alert("Hello World");

// console.log("Code is running...");
// console.log("Code is also running...");
// console.log("Code is looking like a wow...");

// var a = prompt("Enter your number");
// var isTrue = confirm("Are you sure you want to leave this page and blast your pc ");
// if (isTrue) {
//     console.log("Computer is blasting");
// } else {
//     console.log("Computer is not blasting");
// }
// console.log("Your number is " + a);

// -----------------------------------------------------------------------------------------

// document.title = "Fundamentals";
// document.body.style.backgroundColor = "red";

// -------------------------------------------------------------------------------------------

// Variables, data types, and objects
// var a = 5;
// a = a + 1; // Allowed in case of var

// var b = "Mukul";
// var c = 5.8;
// console.log(typeof a, typeof b, typeof c);

// var 55a = "Mukul";
// console.log(55a);  // SyntaxError: Invalid or unexpected token

// const a1 = 6;
// a1 = a1 + 1;  // TypeError: Assignment to constant variable.

// ------------------------------------------------------------------
// let x = "Mukul bhai";
// let y = 23;
// let z = 3.55;
// const p = true;
// let q = undefined;
// let r = null;  // object type

// console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// --------------------------------------------------------------------

// Objects
// let o = {
//     name: "Mukul bhai",
//     "job role": "Full Stack Dev",
//     "is_handsome": true
// }
// console.log(o);
// o.salary = "100crores";
// console.log(o);

// o.salary = "500crores";
// console.log(o);

// ----------------------------------------------------------------

// if, else if, else ladder
// let age = 18;
// let grace = 2;
// age = age + grace;
// console.log(age); // 5
// console.log(age - grace);
// console.log(age * grace);
// console.log(age / grace);
// console.log(age % grace);
// console.log(age ** grace); // exponential operator it print 9

// if (age == 18) {
//     console.log("You can drive");
// } else {
//     console.log("You can't drive");
// }
// ------------------------------------------------------------------------------
// if ("3" == 3) { // true because it check for value only
//     console.log("yes");
// }
// else {
//     console.log("No");
// }

// if ("3" === 3) { // false because it check for both value and type as well
//     console.log("yse");
// }
// else {
//     console.log("No");
// }

// ---------------------------------------------------------------------------------
// if else if else ladder
// let age = 1;
// if (age == 18) {
//     console.log("You can drive");
// } else if (age == 0) {
//     console.log("Are you kidding?");
// } else if (age == 1) {
//     console.log("Are you again kidding?");
// }
// else {
//     console.log("You can't drive");
// }

// -------------------------------------------------------------
// ternary operator
// let a = 6;
// let b = 8;
// let c = a > b ? (a - b) : (b - a);
// console.log(c); // 2

// -------------------------------------------------------------------------

// loops - 5 types in js
// for, for in, for of, while, do - while loop

// 1. for loop
// let a = 1;
// console.log(a);
// console.log(a + 1);
// console.log(a + 2);
// let a = 1;
// for (let i = 0; i < 100; i++) {
//     console.log(a + i);
// }

// 2. for ...in loop - used for object
// let obj = {
//     name: "Mukul",
//     role: "Programmer",
//     company: "codingworkx"
// }

// for (const key in obj) {
//     const element = obj[key];
//     console.log(key, element);
// }

// 3. for ...of loop - used for array
// for (const char of "Mukul") {
//     console.log(char);
// }

// 4. while loop
// let i = 5;
// while (i < 6) {
//     console.log(i);
//     i++;
// }
// infinite loop is running when you don't put i++
// let i = 5;
// while (i < 6) {   // infinite loop
//     console.log(i);
// }

// 5. de ...while loop
// let i = 10;
// do {
//     console.log(i);
//     i++;
// } while (i < 6);

// --------------------------------------------------------------------------

// Functions
// console.log("Hey Mukul you are nice!");
// console.log("Hey Mukul you are good!");
// console.log("Hey Mukul your t-shirt is nice");
// console.log("Hey Mukul your code is admirable");

// Normal function
// function nice(name) {
//     console.log("Hey " + name + " you are nice!");
//     console.log("Hey " + name + " you are good!!");
//     console.log("Hey " + name + " your t-shirt is nice");
//     console.log("Hey " + name + " your code is admirable");
// }
// nice("Mukul");

// function sum(a, b, c = 3) { // here c = 3 is the default parameter
//     console.log(a, b, c); // 3 undefined 3 here the value of b is undefined
//     return a + b + c;
// }
// result1 = sum(3); // NaN
// result1 = sum(3, 5);
// result2 = sum(7, 5);
// result3 = sum(5, 11, 3);
// console.log("The sum of these number is: ", result1);
// console.log("The sum of these number is: ", result2);
// console.log("The sum of these number is: ", result3);

// Arrow function
const func1 = (x) => {
    console.log("I'm an arrow function", x);
}
func1(23);
func1(43);
func1(63);