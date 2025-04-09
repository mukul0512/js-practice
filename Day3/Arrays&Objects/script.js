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

