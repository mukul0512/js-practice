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

// Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters correct value.

// using classical for loop
// let gameNum = 25;
// for (let u = 0; ; u++) {
//     let guessNum = prompt("Enter the game number ");
//     if (guessNum == gameNumber) {
//         console.log("Congratulations ! You guessed it right !");
//         break;
//     }
//     else {
//         console.log("You guessed it wrong ! Try again.");
//     }
// }
// using while loop
// let gameNumber = 25;
// let userNumber = prompt("Guess the game number ");
// while (userNumber != gameNumber) {
//     userNumber = prompt("You entered wrong number. Guess again")
// }
// console.log("Congratulations ! you guessed it right.");

// --------------------------------------------------------------------------------------

// Strings -> Sequence of characters used to represent text
// inbuilt properties -> .length, behaves like object like obj[key] -> str.length, str[position] -> indices
// create string
let str2 = "codingworkx";
// string length
console.log(str2.length);
console.log(str2);
// string indices
console.log(str2[0]);
console.log(str2[1]);
console.log(str2[2]);
console.log(str2[3]);
// Template literals
let sentence = `This is a sentence`;
console.log(sentence);
// -------------------------------------------------------
// need of template literals -> a way to embedded expression in string
let obj = {
    item: "pen",
    price: 10
}
console.log("The cost of " + obj.item + " is " + obj.price + " rupees"); // without template literal
// string interpolation -> to create string by doing substitution of placeholder
console.log(`The cost of ${obj.item} is ${obj.price} rupees`); // using template literal and string interpolation

console.log(`${1 + 2 + 3}`); // it first calculate the value and than be the part of a string interpolation

// escape characters -> also be the part of string

// ---------------------------------------------------------------------------------------

// String Methods/Functions - These are built-in function to manipulate a string
// String are immutable
// str3.toUpperCase()
// Case 1
let str3 = "codingworkx";
console.log(str3.toUpperCase());
console.log(str3); // neither method of string changed the original string
// Case 2 
str3 = str3.toUpperCase();
console.log(str3);
// Case 3
let newStr3 = str3.toUpperCase(); // methods of string always return a new value.
console.log(newStr3);

// str4.toLowerCase()
// Case 1
let str4 = "MUKUL KARNWAL";
console.log(str4.toLowerCase());
console.log(str4);
// Case 2
str4 = str4.toLowerCase();
console.log(str4);
// Case 3
let newStr4 = str4.toLowerCase();
console.log(newStr4);

// str5.trim() - remove whitespace from start and end only
// CAse 1
let str5 = "    coding   workx  js  ";
console.log(str5.trim());
console.log(str5);
// Case 2
str5 = str5.trim();
console.log(str5);
// Case 3
let newStr5 = str5.trim();
console.log(newStr5);

// str6.slice(start, end) -> returns part of string
// Case 1
let str6 = "Coding Workx";
console.log(str6.slice(1, 8)); // it take end index - 1 as it last index is exclusive
// Case 2
console.log(str6.slice(1)); // if end don't have end index than take whole string as whole from start index
// Case 3
str6 = str6.slice(1, 8);
console.log(str6);
// Case 4
let newStr6 = str6.slice(1, 8);
console.log(newStr6);

// str7.concat() -> // join str8 with str7
// Case 1
let str7 = "Hello";
let str8 = "World";
let res = str7 + str8;
console.log(res);
// Case 2
let newStr8 = str7.concat(str8);
console.log(newStr8);

// str9.replace(searchVal, newVal) -> only match first time
// Case 1
let str9 = "Hello there. Mukul this side."
console.log(str9.replace("Mukul", "Karnwal"));
// Case 2
let str11 = "hellololo";
console.log(str11.replace("lo", "p")); // here lo is replaced by p only first time it occur
// Case 3
// str11.replaceAll(searchVal, newVal) -> it replace all occurrence from string
console.log(str11.replaceAll("lo", "p")); // here all occurrence of lo is replaced by p

// str10.charAt(idx)
// Case 1
let str10 = "Hello World";
console.log(str10.charAt(6));
// Case 2
let str12 = str10.charAt(6); // after applied method than always store new string in new variable to use this modified string in your code latter.
// Case 3
str10[6] = "B"; // not possible in case of string because strings are immutable. You can use replace(searchVal, newVal) method to do that.
console.log(str10);

/*

Practice Question

Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length.

eg. user name = "mukulkarnwal", username should be "@mukulKarnwal05"

*/
// let fullname = prompt(`Enter your full name without spaces`);
// console.log(fullname);
// Case 1 - without template literal amd string interpolation
// let username = "@" + fullname + fullname.length;
// console.log(username);

// Case 2 - using template literal amd string interpolation
// let username = `@${fullname}`;
// console.log(username);

// let finalname = `${username.length}`
// console.log(finalname);
// username = `${username}${finalname}`;
// console.log(username);

// Case 2 - using str1.concat(str2)
// let firstname = "@";
// let lastname = `${fullname.length}`
// let finalFullName = firstname.concat(fullname, lastname);
// console.log(finalFullName);

// ----------------------------------------------------------------------------------------------------------

