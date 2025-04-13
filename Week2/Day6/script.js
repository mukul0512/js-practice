/*

* IIFE - Immediately Invoked Function Expression
* Syntax -
* (function main() {
*       ...
*       ...
*   }) ()

*/
// Example of IIFE - Immediately Invoked Function Expression
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

// (async function main() {
//     let a = await sleep()
//     console.log(a);
//     let b = await sleep()
//     console.log(b);
// })()
// ---------------------------------------------------------------------------
// Destructuring inside array
// (async function main() {
//     // let x, y = [1, 5];
//     let [x, y] = [1, 5, 7];
//     console.log(x, y);
// })()

// ---------------------------------------------------------------
// rest operator
(async function main() {
    // let x, y = [1, 5];
    let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
    console.log(x, y, rest);
})()

// ------------------------------------------------------
// Destructuring inside an object
// (async function main() {
//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }
//     let { a, b } = obj;
//     console.log(a, b);
// })()

// -----------------------------------------------------------------
// spread operator 
function sum(p, q, r) {
    return p + q + r;
}

(async function main() {
    let arr = [1, 4, 6];
    const arr1 = [1, 7, 11];
    console.log(sum(arr[0], arr[1], arr[2])); // without spread operator
    console.log(sum(...arr)); // using spread operator
    console.log({ ...arr1 });
})()

// -----------------------------------------------------------------------------------------------------------------------------------------------
