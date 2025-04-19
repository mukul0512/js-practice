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

// Arrays -> Collections of items in array is a linear way as compared to object
// What is Array? -> Array itself is an object having indices and values as compare to keys and values in an object
// Note -> Array itself is an object type
// Create Array
let heroes = ["ironman", "hulk", "thor", "batman"]; // array of string
console.log(heroes);
console.log(typeof heroes);

let marks = [96, 75, 48, 83, 66]; // array of numbers
console.log(marks);
console.log(typeof marks);

let info = ["mukul", 86, "Haridwar"]; // array of any data type can be created
console.log(info);
console.log(typeof info);

// Example object vs array
// need keys to store values inside object. Tracking values by different names using keys is inconvenient as compare to array. What matters is index in an array. But there are different use cases where we need object.
let marksOfStudents = {
    stud1: 85,
    stud2: 75,
    stud3: 98,
    stud4: 68.91
}

let studMarks = [85, 75, 98, 68.91]; // linear way to store marks of students
// Arrays properties 
// property -> gives just a value
// methods -> which do some work
console.log(studMarks);
console.log(studMarks.length);

// Array Indices vs String Indices
// Examples of strings indices
let str14 = "codingworkx";
console.log(str14);
console.log(str14.length);

// Case 1
console.log(str14[0]);
console.log(str14[1]);
console.log(str14[2]);
console.log(str14[3]);
console.log(str14[4]);
console.log(str14[5]);
// Case 2
console.log(str14.charAt(0));
console.log(str14.charAt(1));
console.log(str14.charAt(2));
console.log(str14.charAt(3));
console.log(str14.charAt(4));
console.log(str14.charAt(5));
// Case 3
console.log(str14.indexOf('c'));
console.log(str14.indexOf('o'));
console.log(str14.indexOf('d'));
console.log(str14.indexOf('i'));
console.log(str14.indexOf('n'));
console.log(str14.indexOf('g'));

// Examples of Arrays indices
// Example 1
let arr1 = ['c', 'o', 'd', 'i', 'n', 'g'];
console.log(arr1);
console.log(arr1.length);

// Case 1
console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
// Case 2
// console.log(arr1.charAt(0)); // err; arr1.charAt is not a function

// Case 3
console.log(arr1.indexOf('c'));
console.log(arr1.indexOf('o'));
console.log(arr1.indexOf('d'));
console.log(arr1.indexOf('i'));
console.log(arr1.indexOf('n'));
console.log(arr1.indexOf('g'));

// Example 2
let arr2 = [5, 10, 15, 20, 25, 30];
console.log(arr2);
console.log(arr2.length);

// Case 1
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4]);
console.log(arr2[5]);
// Case 2
console.log(arr2.indexOf(0));
console.log(arr2.indexOf(1));
console.log(arr2.indexOf(2));
console.log(arr2.indexOf(3));
console.log(arr2.indexOf(4));

console.log(arr2.indexOf(5));

// Example 3
let arr3 = ["Mukul", 25, 75.91, "Haridwar", 'M'];
console.log(arr3);
console.log(arr3.length);

// Case 1
console.log(arr3[0]);
console.log(arr3[1]);
console.log(arr3[2]);
console.log(arr3[3]);
console.log(arr3[4]);

console.log(arr3[5]); // because total length is 5
// Case 2
console.log(arr3.indexOf('Mukul'));
console.log(arr3.indexOf(25));
console.log(arr3.indexOf(75.91));
console.log(arr3.indexOf('Haridwar'));
console.log(arr3.indexOf('M'));

console.log(arr3.indexOf()); // because total length is 5

// ----------------------------------------------------------------------

// We can change the original array.
// Example 
let arr4 = [97, 85, 72, 99, 68.8];
console.log(arr4);
arr4[4] = 91; // possible because array is mutable
console.log(arr4); // 68.8 is replaced with 91

// -------------------------------------------------------------------

// looping over an array
// Print all elements of an array
// Example 1 
let supperHeroes = ["ironman", "thor", "hulk", "saktiman", "spiderman", "antman"];
// Case 1
console.log(supperHeroes[0]);
console.log(supperHeroes[1]);
console.log(supperHeroes[2]);
console.log(supperHeroes[3]);
console.log(supperHeroes[4]);
console.log(supperHeroes[5]);
// Case 2
// using for loop
for (let i = 0; i < supperHeroes.length; i++) {
    console.log(supperHeroes[i]);
}
// Case 3
// using while loop
let z = 0;
while (z < supperHeroes.length) {
    console.log(supperHeroes[z]);
    z++;
}
// Case 4
// using do-while loop
let y = 0;
do {
    console.log(supperHeroes[y]);
    y++;

} while (y < supperHeroes.length);

// Note ->  We can also used for ...of loop or for ...in loop but generally we use for ...of loop to iterate over arrays.
// Case 5
// Example 2
let heroNames = ["ironman", "thor", "hulk", "saktiman", "spiderman", "antman"];
// using for ...of loop
// iterable -> includes (strings, objects, arrays)
// Strings -> Collection of characters.
// Objects -> Collection of keys and values.
// Arrays -> Collection of indices and values.
for (let idx of heroNames) { // here val is iterable/ indices and supperHeroes is the array name
    console.log(idx)
}
// Case 6
// using for ...in loop
for (let idx in heroNames) { // here heroNames acts like an object and idex acts like key
    console.log(heroNames[idx]);
}

// Example 3
let citesName = ["Haridwar", "Noida", "Bangalore", "Roorkee", "Dehradun"];
console.log(citesName);
// using for-of loop
for (let elements of citesName) {
    console.log(elements);
}
// using for-in loop
for (let elements in citesName) {
    console.log(citesName[elements]);
}

// Practice Question 1
// For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let studentsMarks = [85, 97, 44, 37, 76, 60];
// using classical for loop
let totalSum = 0;
for (let i = 0; i < studentsMarks.length; i++) {
    totalSum = studentsMarks[i] + totalSum;
}
let avgMarks = totalSum / studentsMarks.length;
console.log(`${totalSum}`);
console.log(`${avgMarks}`);

// using for-of loop
let sumOfMarks = 0;
for (let marks of studentsMarks) {
    // sumOfMarks = sumOfMarks + marks;
    sumOfMarks += marks;
}
let averageMarks = sumOfMarks / studentsMarks.length
console.log(`${sumOfMarks}`);
console.log(`${averageMarks}`);

// Practice Question 2
// For a given array with prices of 5 items ->
// [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

// using for loop 
let pricesOfItems = [250, 645, 300, 900, 50];
let offer = 10
let finalPrice = 0;
for (let i = 0; i < pricesOfItems.length; i++) {
    let priceAfterOfferApply = pricesOfItems[i] / offer;
    console.log(priceAfterOfferApply);
    finalPrice = pricesOfItems[i] - priceAfterOfferApply;
    console.log(finalPrice);
}
console.log(finalPrice);

// using for ---of loop
let pricesListOfItems = [250, 645, 300, 900, 50];
let offerOnPrice = 10;
let finalPriceOnItems = 0;
for (let priceOfEachItem of pricesListOfItems) {
    console.log(priceOfEachItem);
    let priceAfterOffer = priceOfEachItem / offerOnPrice;
    console.log(priceAfterOffer);
    finalPriceOnItems = priceOfEachItem - priceAfterOffer;
    console.log(finalPriceOnItems);
}
console.log(finalPriceOnItems);

// --------------------------------------------------------------------------------------

// Arrays Methods
