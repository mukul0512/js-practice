// a function that can receive any amount
//  of object and return a final object 
// which will be combination of all object

// rest operator and spread operator must be used

let obj1 = {
    name: "a",
    age: 5
}

let obj2 = {
    name: "b",
    age: 6
}

let obj3 = {
    name: "c",
    age: 7
}

let obj4 = {
    name: "d",
    age: 8
}

function combineAllObject(...objList) {   // rest operator - parameter mai pass kiye hue object ya array k element ko combine karne ka kaam karta hai
    return {
        ...objList // spread operator - object ya array k elements ko receive karke segregate karta hai in spread form
    }
}

console.log(combineAllObject(obj1, obj2, obj3, obj4))

// -------------------------------------------------------------------

function add(...z) {  // rest operator 
    let res = 0;
    for (let i = 0; i < z.length; i++) {
        res = res + z[i];
    }
    return res;
}

function printElements(...elementList) {
    console.log(...elementList);
}
printElements(1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14);

// --------------------------------------------------------------------------------------


// rest operator on array
function addNumbers1(a, b, c) { // without rest operator
    return a + b + c;
}
const result1 = addNumbers1(2, 3, 1);
console.log(result1);
// ---------------------------------------------------------------------
function addNumbers(a, b, c, ...other) { // using rest operator
    console.log(other);
    console.log(other[0]);
    console.log(other[1]);
    console.log(other[2]);
    console.log(other[3]);
    console.log(other[4]);
    return a + b + c + other; // 6 is the sum od a, b, c and 8, 9, 15, 16 are the other array element
}
const result = addNumbers(2, 3, 1, 8, 9, 15, 16);
console.log(result);

// --------------------------------------------------------------------------------------------------------
// spread operator example

let name = ["Mukul", "Peeyush", "Pulkit"];
function getNames(name1, name2, name3) {
    console.log(name1, name2, name3);
}
// getNames(name[0], name[1], name[2]); // without spread
getNames(...name); // using spread - - elements ko segregate kar sakte hai. Means alag karna.
// getNames(name); 

// ----------------------------------------------------------------------------

// Rest - Object k saath 

//without rest operator
// let students = {
//     myName: "Mukul",
//     age: 25,
//     hobbies: ["Programming", "Coding"]
// }

// // const age = students.age; 
// const { myName, age } = students; // array destructuring
// console.log(myName, age);

// ----------------------------------------------------------------------------------------------
// Rest - Object k saath 
let students = {
    myName: "Mukul",
    age: 25,
    hobbies: ["Programming", "Coding"]
}

// const age = students.age; 
const { myName, ...other } = students; // using rest operator
console.log(myName, other);

// spread - Object k saath
// very very very important example 
let newStudent = {
    ...students,
    age: 26
}

console.log(newStudent);