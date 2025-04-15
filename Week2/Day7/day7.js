// call() - Example 1 | creating function inside same method
// let name = {
//     firstname: "Mukul",
//     lastname: "Karnwal",
//     printFullName: function () {
//         console.log(this.firstname + " " + this.lastname);
//     }
// }
// name.printFullName();

// let name2 = {
//     firstname: "Krishna",
//     lastname: "Sir"
// }
// // Function borrowing
// name.printFullName.call(name2);

// --------------------------------------------------------------------------------

// call() - Example 2 | we can also create separate function
// let name = {
//     firstname: "Mukul",
//     lastname: "Karnwal",
// }

// let printFullName = function () {
//     console.log(this.firstname + " " + this.lastname);
// }

// printFullName.call(name);

// let name2 = {
//     firstname: "Krishna",
//     lastname: "Sir"
// }
// // Function borrowing
// printFullName.call(name2);

// Example 3
// call() - if we had some parameter inside the function. We can pass arguments individually in the call() method
// let name = {
//     firstname: "Mukul",
//     lastname: "Karnwal",
// }

// let printFullName = function (hometown) {
//     console.log(`${this.firstname} ${this.lastname} from ` + hometown);
// }

// printFullName.call(name, "Haridwar");

// let name2 = {
//     firstname: "Krishna",
//     lastname: "Sir"
// }
// // Function borrowing
// printFullName.call(name2, "Varanasi");

// apply() - instead of passing arguments individually in the call() method we can pass arguments in an array list using apply() method.
// let name = {
//     firstname: "Mukul",
//     lastname: "Karnwal",
// }

// let printFullName = function (hometown, state) {
//     console.log(`${this.firstname} ${this.lastname} from ` + hometown + "," + state);
// }

// // printFullName.call(name, "Haridwar", " Uttarakhand"); // using call()
// printFullName.apply(name, ["Haridwar", " Uttarakhand"]); // using apply()

// let name2 = {
//     firstname: "Krishna",
//     lastname: "Sir"
// }
// // Function borrowing
// // printFullName.call(name2, "Varanasi", " Uttar Pradesh"); // using call()
// printFullName.apply(name2, ["Varanasi", " Uttar Pradesh"]); // using apply()

// --------------------------------------------------------------------------------------------------------------

// bind() -
// * It will create a copy of printFullName method and bind that into name2 object and will return a function.
// * It doesn't directly called that method like we called directly in call() method rather than it will return a method which will called latter.

// let name = {
//     firstname: "Mukul",
//     lastname: "Karnwal",
// }

// let printFullName = function (hometown, state) {
//     console.log(`${this.firstname} ${this.lastname} from ` + hometown + "," + state);
// }

// // printFullName.call(name, "Haridwar", " Uttarakhand"); // using call()
// printFullName.apply(name, ["Haridwar", " Uttarakhand"]); // using apply()

// let name2 = {
//     firstname: "Krishna",
//     lastname: "Sir"
// }
// // Function borrowing
// // printFullName.call(name2, "Varanasi", " Uttar Pradesh"); // using call()
// // printFullName.apply(name2, ["Varanasi", " Uttar Pradesh"]); // using apply()
// let printMyName = printFullName.bind(name2, "Varanasi", " Uttar Pradesh"); // using bind()
// console.log(printMyName); // return a method
// printMyName(); // invoke latter

// --------------------------------------------------------------------------------------------------------

// Polyfill for bind method
// Task -> create our own implementation of bind() method

// let name = {
//     firstname: "Mukul",
//     lastname: "Karnwal"
// }

// let printName = function (hometown, state, country) {
//     console.log(this.firstname + " " + this.lastname + " , " + hometown + ", " + state + ", " + country);
// }

// // let printMyName = printName.bind(name, "Haridwar");
// // printMyName("Uttarakhand", "India");

// let printMyName = printName.bind(name, "Haridwar", "Uttarakhand");
// printMyName("India");

// // Our own bind() method
// Function.prototype.mybind = function (...args) {
//     // this -> printName
//     let obj = this,
//         params = args.slice(1);
//     return function (...args2) {
//         // obj.call(args[0], params);
//         obj.apply(args[0], [...params, ...args2]);
//     }
// }

// // let printMyName2 = printName.mybind(name, "Haridwar");
// // printMyName2("Uttarakhand", "India");

// let printMyName2 = printName.mybind(name, "Haridwar", "Uttarakhand");
// printMyName2("India");

// ---------------------------------------------------------------------------------------------------------------

// Function Currying implementation
// 2 ways - 1. by using bind() method
//        - 2. by using closures

// 1. by using bind() method
// let multiply = function (x, y) {
//     console.log(x * y);
// }

// // let multiplyByTwo = multiply.bind(this, 2, 3);
// // multiplyByTwo(5); // 3 ignore 5 here
// // let multiplyByTwo = multiply.bind(this);
// // multiplyByTwo(2, 3);

// let multiplyByTwo = multiply.bind(this, 2); // function currying
// multiplyByTwo(3);
// let multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(5);

// ------------------------------------------------------

// 2. by using closures
// let multiply = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }

// let multiplyByTwo = multiply(2);
// multiplyByTwo(3);
// let multiplyByThree = multiply(3);
// multiplyByThree(5);