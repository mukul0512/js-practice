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
// const func1 = (x) => {
//     console.log("I'm an arrow function", x);
// }
// func1(23);
// func1(43);
// func1(63);

// ---------------------------------------------------------------------

// Faulty Calculator
/*

Create a faulty calculator using js
This faulty calculator does following:
1. It takes two numbers as an input from the user.
2. It performs wrong operations as follows.

    + ---> -
    * ---> +
    - ---> /
    / ---> **

Note - It performs wrong operation 10 % of the times.

a = Math.random() < 0.1

*/

// let random = Math.random();
// console.log(random);
// let a = prompt("Enter first number");
// let b = prompt("Enter Operation");
// let c = prompt("Enter second number");

// let obj = {
//     "+": "-",
//     "*": "+",
//     "-": "/",
//     "/": "**"
// }
// if (random > 0.1) {
//     // Perform correct calculation
//     // using eval() and access using template literal
//     console.log(`Operation perform ${a} ${b} ${c}`);
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
// }
// else {
//     // Perform wrong calculation
//     c = obj[c]
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
// }
// ----------------------------------------------------------------------

// Strings
// let a = "Mukul";
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a.length);

// // Template literal - applied in string
// let real_name = "Mukul";
// let friend = "Rajan";
// console.log("His name is " + real_name + " and his friends is " + friend);
// console.log(`His name is ${real_name} and his friends is ${friend}`);

// --------------------------------------------------------------------------------
// Strings properties and methods
// let b = "Mukul";
// let a = " Vipul";
// console.log(b.toUpperCase());
// console.log(b.toLowerCase());
// console.log(b.slice(1, 3));
// console.log(b.slice(1));
// console.log(b.split());
// console.log(b.length);
// console.log(b.replace("M", "V"));
// console.log(b.concat(a, " Karnwal"));
// console.log(b.charAt(0));
// console.log(b.indexOf("ku"));
// console.log(b.indexOf("V"));
// console.log(b.endsWith("ul"));
// console.log(b.startsWith("Mu"));
// console.log(b.startsWith("pul"));
// // Strings are immutable
// console.log(a);
// console.log(b);

// ------------------------------------------------------------

// Business Name Generator
// Making a SAAS product (Software As A Service) ex- Canva
// Create a business name generator by combining list of adjectives i.e. shop name and another word.
// Note - without the use of arrays. You can use functions and strings or if ...else

/*
Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub

*/

let rand = Math.random();
let first, second, third;
// 0 ... 0.33, 0.66, ... 1
// Generating first Adjective word
if (rand < 0.33) {
    first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing";
} else {
    first = "Fire";
}

// Generating second word of shop name
if (rand < 0.33) {
    second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
    second = "Foods";
} else {
    second = "Garments";
}

// Generating third word of another word
if (rand < 0.33) {
    third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited";
} else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`);
