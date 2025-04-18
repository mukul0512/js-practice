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
let str = "codingworkx";
for (let i of str) { // i can be value which is iterator gives character of string
    console.log(i);
}

// Calculate length of string
let str1 = "Java Script";
let lengthOfStr1 = 0;
for (let i of str1) {
    lengthOfStr1++;
}
console.log(lengthOfStr1);
// -----------------------------------------------------------------------------------------------
