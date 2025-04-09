// difference btw void and undefined and null

// console.log(square(4,5));
// // 1. function declaration
// function square(number, x) {
//     // code
//     console.log(x);
//     return;
// }
// const result = square(4);
// console.log(result);

// // 2. arrow function
// const squareArr = (number) => number * number;
// console.log(squareArr(4));

// //. 3. anonomous function

// const squareAnonomous = function (number) {
//     return number * number;
// };
// const x = squareAnonomous(4);
// console.log(x);
// console.log(squareAnonomous(4)); // 16

// // console.log(typeof square);
// if(true){
//     console.log("hii");
//     console.log('Hello')
// }

// let name = "Ram";

// for(let i = 0; i < 10; i++){
//     console.log(i);
//     if(true){
//         var a = 10;
//         let y = 5;
//         let child_Value;
//         // console.log(y);
//         if(true){
//             y = 10;
//             console.log(y);
//             child_Value = 10;
//         }
//         console.log(y);
//         console.log(child_Value);
//     }
//     // console.log(a);
//     // console.log(y);
// }

// // console.log(typeof null)

// /* [1] -> [2] -> [3] ([4])
//  *  [1] -> [2] -> [3]
//  *
//  *  in c++ temp.clear([4])
//  *
//  *
// */
// console.log(name);

// //
// function fact(x){
//     // base case
//     if(x === 0 || x === 1){
//         return 1;
//     }
//     // logic
//     // recursive call
//     return fact(x-1)*x;
// }

// // console.log("Factioral :", fact(6));


// function outside() {
//     const x = 5;
//     function inside(x) {
//       return x * 2;
//     }
//     return inside;
//   }

// //   console.log(outside())
// const x = outside();
// console.log(x(5));
// console.log(outside()(1));




// const multiply = (multiplier, ...bakiKaData) => {
//     console.log(bakiKaData);

//     for (let i = 0; i < bakiKaData.length; i++) {
//         console.log(bakiKaData[i] * multiplier);
//     }
//     return 5;
// }
// const temp = () => 5;
// console.log(temp());

// const returnedValue = multiply(2, 1, 2, 3, 4, 5, 6, 7)
// console.log(returnedValue);
//   const arr = multiply(2, 1, 2, 3);
//   console.log(arr);

// -------------------------------------------------------------------

let a;
console.log(a); // undefined

let obj = {};
console.log(obj.name); // undefined

let b = null;
console.log(b); // null

// call by value
function changeValue(x) {
    x = x + 10;
    console.log("Inside function:", x);
}

let num = 5;
changeValue(num);

console.log("Outside function:", num); // Still 5

// call by reference
function updatePerson(person) {
    person.age = 30;
    console.log("Inside function:", person);
}

let user = { name: "Alice", age: 25 };
updatePerson(user);

console.log("Outside function:", user); // age is now 30

// Recursion - Factorial 
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let result = factorial(5);
console.log("Factorial of 5 is:", result);

// loop to iterate over an object’s keys and values using template literal we can access key and value.
const person = {
    name: "Alice",
    age: 28,
    city: "Paris"
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${person[key]}`); // template literal
    }
}

