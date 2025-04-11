// difference btw void and undefined and null

console.log(square(4, 5));
// square(4, 5);
// 1. function declaration
function square(number, x) {
    console.log(number, x);
    return;
}
const res = square(4);
console.log(res);
console.log(typeof square);

// 2. arrow function
const squareArr = (number) => number * number;
console.log(squareArr(4));

//. 3. anonymous function
const squareAnonymous = function (number) {
    return number * number;
};
const x = squareAnonymous(4);
console.log(x);
squareAnonymous(4);

if (true) {
    console.log("hii");
    console.log('Hello')
}

let name = "Ram";
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (true) {
        var a = 10;
        let y = 5;
        let child_Value;
        console.log(y);
        if (true) {
            y = 10;
            console.log(y);
            child_Value = 10;
        }
        console.log(y);
        console.log(child_Value);
    }
    console.log(a);
}
console.log(name);
console.log(y);


console.log(typeof null)
// --------------------------------------------------------------------------------
// /* [1] -> [2] -> [3] ([4])
// [1] -> [2] -> [3]
//  in c++ temp.clear([4])
// ------------------------------------------------------------

function fact(x) {
    // base case
    if (x === 0 || x === 1) {
        return 1;
    }
    // logic
    // recursive call
    return fact(x - 1) * x;
}
console.log("Factorial :", fact(5));

// -----------------------------------------------------
function outside() {
    const s = 5;
    function inside(s) {
        return s * 2;
    }
    return inside;
}
console.log(outside())
const s = outside();
console.log(s(5));
console.log(outside()(1));
// -------------------------------------------------------------------------

const multiply = (multiplier, ...bakiKaData) => {
    console.log(bakiKaData);

    for (let i = 0; i < bakiKaData.length; i++) {
        console.log(bakiKaData[i] * multiplier);
    }
    return 5;
}
const temp = () => 5;
console.log(temp());

const returnedValue = multiply(2, 1, 2, 3, 4, 5, 6, 7)
console.log(returnedValue);
const arr = multiply(2, 1, 2, 3);
console.log(arr);

// -------------------------------------------------------------------

let g;
console.log(g); // undefined

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
console.log("Outside function:", num);

// call by reference
function updatePerson(person) {
    person.age = 25;
    console.log("Inside function:", person);
}
let user = { name: "Mukul", age: 25 };
updatePerson(user);
console.log("Outside function:", user);

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

// Recursion - Fibonacci
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciSeries(count) {
    for (let i = 0; i < count; i++) {
        console.log(fibonacci(i));
    }
}
printFibonacciSeries(10);

// loop to iterate over an object’s keys and values using template literal we can access key and value.
const person = {
    name: "Mukul",
    age: 28,
    city: "Haridwar"
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(`Key: ${key}, Value: ${person[key]}`); // template literal
    }
}