console.log("Let's get started..");

// --------------------------------------------------------------------------------------
// Loops - to execute a piece of code again and again
// for ...loop 
// print 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("loop ended");
// calculate sum 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log(sum);

// --------------------------------------------------------------------------

// while ... loop 
// print 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
// calculate sum 1 to 5
let sum1 = 0;
let j = 1;
while (j <= 5) {
    sum1 = sum1 + j;
    j++;
}
console.log(sum1);
// -------------------------------------------------------------------------------

// do ...while loop
// print 1 to 5
let k = 10;
// let k = 1;
do {
    console.log("Hello");
    k++;
}
while (k <= 5);

// calculate sum 1 to 5
let l = 1;
let sum2 = 0;
do {
    sum2 = sum2 + l;
    console.log(sum2);
    l++;
} while (l <= 5);

// ----------------------------------------------------------------------------

// for ...of loop -> only applied over strings and arrays
// over string
let str = "codingworkx";
for (let i of str) { // i can be value which is iterator gives character of string
    console.log(i);
}

// Calculate length of string
let str1 = "Java Script";
let lengthOfStr1 = 0;
for (let i of str1) {
    console.log(i);
    lengthOfStr1++;
}
console.log(lengthOfStr1);
// -----------------------------------------------------------------------------------------------
// for ...in loop -> only applied over objects and arrays 
// over objects
let student = {
    name: "Mukul Karnwal",
    age: 25,
    marks: 68.91,
    isPass: true
}
for (let key in student) {
    console.log(key, student[key]);
}
// -----------------------------------------------------------------------------------

// Practice Example
// print all even number from 0 to 100 
/*
Algo -
Step1 - print all number from 0 to 100
Step2 - logic of even is num % 2 == 0 
Step3 - print even number 

*/

// step1 - print all number from 0 to 100
// using classical for loop
for (let i = 0; i < 100; i++) {
    console.log(i);
}
// using while loop
let p = 0;
while (p < 100) {
    console.log(p);
    p++;
}
// using do while loop
let q = 0;
do {
    console.log(q);
    q++;
} while (q < 100);
// ----------------------------------------------------------------------------------------------------------------
// Step 2, 3 -> logic of even no -> print 
// using classical for loop
for (let r = 0; r < 100; r++) {
    if (r % 2 == 0) {
        console.log(r);
    }
}
// using while loop
let s = 0;
while (s < 100) {
    if (s % 2 == 0) {
        console.log(s);
    }
    s++;
}
// using do while loop
let t = 0;
do {
    if (t % 2 == 0) {
        console.log(t);
    }
    t++;
} while (t < 100);

// ----------------------------------------------------------------------------------