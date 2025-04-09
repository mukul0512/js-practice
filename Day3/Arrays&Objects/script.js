// === Arrays ===

const fruits = ["apple", "banana", "cherry"];

// 2. Accessing elements
console.log(fruits[0]); // apple

// 3. Adding elements
fruits.push("orange"); // adds to end
fruits.unshift("kiwi"); // adds to beginning

// 4. Removing elements
fruits.pop(); // removes last
fruits.shift(); // removes first

// 5. forEach - loop through each element
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index + 1}: ${fruit}`);
});

// 6. map - create a new array
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

// 7. filter - filter items based on a condition
const longNamedFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longNamedFruits);

// 8. .reduce() - Reduces an array to a single value.
const num = [1, 2, 3, 4];
const sum = num.reduce((acc, cur) => acc + cur, 0); // 10

// === Objects ===

// 1. Creating an object literal
const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greet: function () {
        console.log("Hello! My name is " + this.name);
    }
};

// 2. Accessing properties
console.log(person.name); // Alice
console.log(person["age"]); // 30

// 3. Calling a method
person.greet();

// === Hands-on Exercises ===

// 1: Create an array of numbers and double them using map
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

// 2: Create an array of people objects and filter those over 18
const people = [
    { name: "Tom", age: 15 },
    { name: "Jerry", age: 22 },
    { name: "Lisa", age: 18 }
];

const adults = people.filter(person => person.age >= 18);
console.log("Adults:", adults);

// 3: Add a method to each person object to greet by name
people.forEach(p => {
    p.sayHi = function () {
        console.log(`Hi, I'm ${this.name}`);
    };
});

// Call the method on each
people.forEach(p => p.sayHi());

// -------------------------------------------------------------------------------------------------------

// slice(start, end) - Returns a shallow copy of a portion of an array (does not modify original).
const a = [1, 2, 3, 4];
a.slice(1, 3); // [2, 3]

// splice(start, deleteCount, ...items) - Modifies the original array by removing/adding elements.
const b = [1, 2, 3];
b.splice(1, 1, 4); // b becomes [1, 4, 3]

// Array.from() - Converts array-like or iterable objects into an array.
Array.from('abc'); // ['a', 'b', 'c']

// unshift() - Adds elements to the beginning of an array.
const c = [2, 3];
c.unshift(1); // c becomes [1, 2, 3]

// push() - Adds elements to the end.
const d = [1, 2];
d.push(3); // a becomes [1, 2, 3]

// pop() - Removes the last element.
const e = [1, 2, 3];
e.pop(); // a becomes [1, 2]

// concat() - Combines arrays without modifying original arrays.
const p = [1];
const q = [2];
const r = p.concat(q); // [1, 2]

// this, call, bind, apply

// this - Refers to the context (object) from which a function is called.
const obj = {
    name: "Alice",
    greet() {
        console.log(this.name); // 'this' refers to 'obj'
    }
};
obj.greet(); // "Alice"

// call() - Calls a function with a specific this and arguments passed individually.
function sayHello() {
    console.log(this.name);
}
const person2 = { name: 'Bob' };
sayHello.call(person2); // Bob

// apply() - Same as call, but arguments are passed as an array.
sayHello.apply(person2); // Bob

// bind() - Returns a new function with this bound to a specific object.
const sayBob = sayHello.bind(person);
sayBob(); // Bob

