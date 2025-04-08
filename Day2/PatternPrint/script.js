// 1. Triangle Pattern — I

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// const TrianglePattern1 = () => {
//     let n = 5;
//     let pattern = "";
//     for (let i = 1; i <= n; i++) {
//         for (let j = 1; j <= i; j++) {
//             pattern = pattern + j + " ";
//         }
//         pattern = pattern + "\n";
//     }
//     console.log(pattern);
// }

// TrianglePattern1(5);

// -------------------------------------------------------------------------------------
// Triangle Pattern — II

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

// let n = 5;
// let pattern = "";
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//         pattern = pattern + i + " ";
//     }
//     pattern = pattern + "\n";
// }
// console.log(pattern);

// -------------------------------------------------------------------------------------
// Triangle Pattern — III

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let n = 4;
let variable = 1;
let pattern = "";

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        pattern = pattern + variable + " ";
        variable++;
    }
    pattern = pattern + "\n";
}
console.log(pattern);