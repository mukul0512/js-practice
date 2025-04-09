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