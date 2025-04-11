// loops
// classical for loop
// let a = [1, 93, 5, 6, 88];
// for (let i = 0; i < a.length; i++) {
//     const element = a[i];
//     console.log(element);
// }

// -------------------------------------------------------------

// forEach loop
// let a = [1, 93, 5, 6, 88];
// a.forEach((value, index, arr) => {
//     console.log(value, index, arr);
// })

// --------------------------------------------------------------------

// forIn loop -- for object
// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element);
//     }
// }

// -------------------------------------------------

// for ...of loop --> for arrays
// let a = [1, 93, 5, 6, 88];
// for (const element of a) {
//     console.log(element);
// }

// -----------------------------------------------

// using classical for loop to create new array and store element
// let arr = [1, 13, 5, 7, 11];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     newArr.push(element ** 2);
// }
// console.log(newArr);

// ------------------------------------------------------------------

// using map() to create new array and store element
// let arr = [1, 13, 5, 7, 11];
// let newArr = arr.map((e) => {
//     return e ** 2;
// })
// console.log(newArr);
// ---------------------------------------------------------------

// using filter()
// let arr = [1, 13, 5, 7, 11];
// const greaterThanSeven = (e) => {
//     if (e > 7)
//         return true;
//     else
//         return false;
// }
// console.log(arr.filter(greaterThanSeven));

// ---------------------------------------------------------------

// using filter() other way to use it
// let arr = [1, 13, 5, 7, 11];
// const greaterThanSeven = (arr.filter((e) => {
//     if (e > 7) return true;
//     return false;
// }));
// console.log(greaterThanSeven);

// ------------------------------------------------------------------

// using reduce()
// let arr = [1, 13, 5, 7, 11];
// const sum = (a, b) => {
//     return a + b;
// }
// console.log(arr.reduce(sum));

// -------------------------------------------------------

// Array.from()
// console.log(Array.from("Mukul"));

// --------------------------------------------------------------
