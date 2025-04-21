// alert("Hello World");

console.log("Code is running...");
console.log("Code is also running...");
console.log("Code is looking like a wow...");

// var a = prompt("Enter your number");
// var isTrue = confirm("Are you sure you want to leave this page and blast your pc ");
// if (isTrue) {
//     console.log("Computer is blasting");
// } else {
//     console.log("Computer is not blasting");
// }
// console.log("Your number is " + a);

// -----------------------------------------------------------------------------------------

document.title = "Fundamentals";
document.body.style.backgroundColor = "red";

// -------------------------------------------------------------------------------------------

// Variables, data types, and objects
var a = 5;
a = a + 1; // Allowed in case of var

var b = "Mukul";
var c = 5.8;
console.log(typeof a, typeof b, typeof c);

// var 55a = "Mukul";
// console.log(55a);  // SyntaxError: Invalid or unexpected token

// const a1 = 6;
// a1 = a1 + 1;  // TypeError: Assignment to constant variable.

// ------------------------------------------------------------------
let x = "Mukul bhai";
let y = 23;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;  // object type

console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// --------------------------------------------------------------------

// Objects
let o = {
    name: "Mukul bhai",
    "job role": "Full Stack Dev",
    "is_handsome": true
}
console.log(o);
o.salary = "100crores";
console.log(o);

o.salary = "500crores";
console.log(o);

// ----------------------------------------------------------------

// if, else if, else ladder
let age = 18;
let grace = 2;
age = age + grace;
console.log(age);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace); // exponential operator it print 9

if (age == 18) {
    console.log("You can drive");
} else {
    console.log("You can't drive");
}
// ------------------------------------------------------------------------------
if ("3" == 3) { // true because it check for value only
    console.log("yes");
}
else {
    console.log("No");
}

if ("3" === 3) { // false because it check for both value and type as well
    console.log("yse");
}
else {
    console.log("No");
}

// ---------------------------------------------------------------------------------
// if else if else ladder
let myAge = 1;
if (myAge == 18) {
    console.log("You can drive");
} else if (myAge == 0) {
    console.log("Are you kidding?");
} else if (myAge == 1) {
    console.log("Are you again kidding?");
}
else {
    console.log("You can't drive");
}

// -------------------------------------------------------------
// ternary operator
let a1 = 6;
let b1 = 8;
let c1 = a1 > b1 ? (a1 - b1) : (b1 - a1);
console.log(c1);

// -------------------------------------------------------------------------

// loops - 5 types in js
// for, for in, for of, while, do - while loop

// 1. for loop
let s = 1;
console.log(s);
console.log(s + 1);
console.log(s + 2);
console.log(s + 3);
console.log(s + 4);
let t = 1;
for (let i = 0; i < 100; i++) {
    console.log(t + i);
}

// 2. for ...in loop - used for object
let obj = {
    name: "Mukul",
    role: "Programmer",
    company: "codingworkx"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

// 3. for ...of loop - used for string
for (const char of "Mukul") {
    console.log(char);
}

// 4. while loop
let l = 5;
while (l < 6) {
    console.log(l);
    l++;
}
// infinite loop is running when you don't put i++
// let i = 5;
// while (i < 6) {   // infinite loop
//     console.log(i);
// }

// 5. do ...while loop
let i = 10;
do {
    console.log(i);
    i++;
} while (i < 6);

// --------------------------------------------------------------------------

// Functions
console.log("Hey Mukul you are nice!");
console.log("Hey Mukul you are good!");
console.log("Hey Mukul your t-shirt is nice");
console.log("Hey Mukul your code is admirable");

// Normal function
function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!!");
    console.log("Hey " + name + " your t-shirt is nice");
    console.log("Hey " + name + " your code is admirable");
}
nice("Mukul");

function sum(a, b, c = 3) { // here c = 3 is the default parameter
    console.log(a, b, c); // 3 undefined 3, here the value of b is undefined
    return a + b + c;
}
result1 = sum(3); // NaN
result2 = sum(3, 5);
result3 = sum(7, 5);
result4 = sum(5, 11, 3);
console.log("The sum of these number is: ", result1);
console.log("The sum of these number is: ", result2);
console.log("The sum of these number is: ", result3);
console.log("The sum of these number is: ", result4);

// Arrow function
const func1 = (x) => {
    console.log("I'm an arrow function", x);
}
func1(23);
func1(43);
func1(63);

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

Note - It performs wrong operation 10% of the times.

a = Math.random() < 0.1

*/

// let random = Math.random();
// console.log(random);
// let a = prompt("Enter first number");
// let b = prompt("Enter Operation");
// let c = prompt("Enter second number");

// let obj1 = {
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
//     c = obj1[c]
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
// }
// ----------------------------------------------------------------------

// Strings
let myName = "Mukul";
console.log(myName[0]);
console.log(myName[1]);
console.log(myName[2]);
console.log(myName[3]);
console.log(myName[4]);
console.log(myName[5]);
console.log(myName.length);

// Template literal - applied in string
let real_name = "Mukul";
let friend = "Rajan";
console.log("His name is " + real_name + " and his friends is " + friend);
console.log(`His name is ${real_name} and his friends is ${friend}`);

// --------------------------------------------------------------------------------
// Strings properties and methods
let strName = "Mukul";
let strFrnd = "Vipul";
console.log(strName.toUpperCase());
console.log(strName.toLowerCase());
console.log(strName.slice(1, 3));
console.log(strName.slice(1));
console.log(strName.split(""));
console.log(strName.length);
console.log(strName.replace("M", "V"));
console.log(strName.concat(" " + strName, " Karnwal"));
console.log(strName.concat(strFrnd));
console.log(strName.charAt(0));
console.log(strName.indexOf("ku"));
console.log(strFrnd.indexOf("V"));
console.log(strName.endsWith("ul"));
console.log(strName.startsWith("Mu"));
console.log(strName.startsWith("pul"));
// Strings are immutable
console.log(strFrnd); // original string are still same
console.log(strName); // original string are still same

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

// let rand = Math.random();
// let first, second, third;
// 0 ... 0.33, 0.66, ... 1
// Generating first Adjective word
// if (rand < 0.33) {
//     first = "Crazy";
// } else if (rand < 0.66 && rand >= 0.33) {
//     first = "Amazing";
// } else {
//     first = "Fire";
// }

// Generating second word of shop name
// if (rand < 0.33) {
//     second = "Engine";
// } else if (rand < 0.66 && rand >= 0.33) {
//     second = "Foods";
// } else {
//     second = "Garments";
// }

// Generating third word of another word
// if (rand < 0.33) {
//     third = "Bros";
// } else if (rand < 0.66 && rand >= 0.33) {
//     third = "Limited";
// } else {
//     third = "Hub";
// }

// console.log(`${first} ${second} ${third}`);

// ---------------------------------------------------------------------

// Calculate the factorial
// Write a program to calculate factorial of a number using reduce and using for loop

const Factorial = (n) => {
    let arr = Array.from(Array(n + 1).keys());
    console.log(arr.slice(1));
    let res1 = arr.slice(1).reduce((prev, curr) => { // using reduce()
        return prev * curr;
    })
    return res1;
}
console.log(Factorial(5));

const factFor = (num) => {
    let fac = 1;
    for (let i = 1; i <= num; i++) {
        fac = fac * i;
    }
    return fac;
}
console.log(factFor(5));

