// Calculator using switch
// const calculator = (a, b, operator) => {
//     let result;
//     switch (operator) {
//         case '+':
//             result = a + b;
//             break;
//         case '-':
//             result = a - b;
//             break;
//         case '*':
//             result = a * b;
//             break;
//         case '/':
//             if (b !== 0) {
//                 result = a / b;
//             } else {
//                 result = 'Error: Division by zero';
//             }
//             break;
//         default:
//             result = 'Error: Invalid operator';
//             break;
//     }

//     return result;
// };

// console.log(calculator(8, 2, '+')); // 10
// console.log(calculator(8, 2, '-')); // 6
// console.log(calculator(8, 2, '*')); // 16
// console.log(calculator(8, 2, '/')); // 4
// console.log(calculator(8, 0, '/')); // Error: Division by zero
// console.log(calculator(8, 2, '%')); // Error: Invalid operator

// ------------------------------------------------------------------------------------------

// Calculator using if ...else
// const calculate = (a, b, operator) => {
//     let result;

//     if (operator === '+') {
//         result = a + b;
//     } else if (operator === '-') {
//         result = a - b;
//     } else if (operator === '*') {
//         result = a * b;
//     } else if (operator === '/') {
//         if (b !== 0) {
//             result = a / b;
//         } else {
//             result = 'Error: Division by zero';
//         }
//     } else {
//         result = 'Error: Invalid operator';
//     }

//     return result;
// };

// console.log(calculate(12, 4, '+')); // 16
// console.log(calculate(12, 4, '-')); // 8
// console.log(calculate(12, 4, '*')); // 48
// console.log(calculate(12, 4, '/')); // 3
// console.log(calculate(12, 0, '/')); // Error: Division by zero
// console.log(calculate(12, 4, '%')); // Error: Invalid operator

// -------------------------------------------------------------------------------------------

/*
    Difference between break, continue and return
    How many types of loops - entry control vs exit control loop
    Perform crud operation using object

*/

// 1. break - Immediately exits the closest enclosing loop (for, while, switch etc.)
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         break;
//     }
//     console.log(i);
// }

// 2. continue - Skips the rest of the current loop iteration and moves to the next one.
// for (let i = 0; i < 5; i++) {
//     if (i === 3) {
//         continue;
//     }
//     console.log(i);
// }

// 3. return - Exits a function completely and optionally returns a value.
// function findNumber() {
//     for (let i = 0; i < 5; i++) {
//         if (i === 3) {
//             return "3";
//         }
//         console.log(i);
//     }
// }

// let result = findNumber();
// console.log("Result:", result);

// 4. How many types of loops - entry control vs exit control loop
// Note - Only do ...while loop is the exit control loop and other are the entry control loop

// 1. Entry control loop

// 1. for loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }

// 2. while loop
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// 3. for ...of loop
// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//     console.log(fruit);
// }

// 4. for ...in loop
// const employee = { name: "Mukul", age: 25 };
// for (const key in employee) {
//     console.log(key, employee[key]);
// }

// 2. exit control loop

// 1. do ...while loop
// let i = 5;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);


// --------------------------------------------------------------

// Perform crud operation using object 
let user = {
    id: 1,
    name: "Mukul",
    age: 25
};

// 1. Create 
user.email = "mukul.codingworkx@gmail.com";
user["isActive"] = true;
console.log("User is created:", user);

// 2. Read 
console.log("User Name:", user.name);
console.log("User Email:", user["email"]);

// 3. Update 
user.age = 26;
user["name"] = "Mukul Karnwal";
console.log("After Update:", user);

// 3. Delete 
delete user.email;
delete user["isActive"];
console.log("After Delete:", user);