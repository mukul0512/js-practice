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

