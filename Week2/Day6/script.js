/*

* IIFE - Immediately Invoked Function Expression
* Syntax -
* (function main() {
*       ...
*       ...
*   }) ()

*/
// Example of IIFE - Immediately Invoked Function Expression
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}

// (async function main() {
//     let a = await sleep()
//     console.log(a);
//     let b = await sleep()
//     console.log(b);
// })()
// ---------------------------------------------------------------------------
// Destructuring inside array
// (async function main() {
//     // let x, y = [1, 5];
//     let [x, y] = [1, 5, 7];
//     console.log(x, y);
// })()

// ---------------------------------------------------------------
// rest operator
(async function main() {
    // let x, y = [1, 5];
    let [x, y, ...rest] = [1, 5, 7, 8, 9, 10];
    console.log(x, y, rest);
})()

// ------------------------------------------------------
// Destructuring inside an object
// (async function main() {
//     let obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }
//     let { a, b } = obj;
//     console.log(a, b);
// })()

// -----------------------------------------------------------------
// spread operator 
function sum(p, q, r) {
    return p + q + r;
}

(async function main() {
    let arr = [1, 4, 6];
    const arr1 = [1, 7, 11];
    console.log(sum(arr[0], arr[1], arr[2])); // without spread operator
    console.log(sum(...arr)); // using spread operator
    console.log({ ...arr1 });
})()

// -----------------------------------------------------------------------------------------------------------------------------------------------

/*

* The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

* Important problems for building logic skill

* The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

* The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

* The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

* The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

* The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

* The Local Storage Manager: You are working on a note-taking app, and you want to implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

* Async Array Mapping: Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

* The Asynchronous Shopper: Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

* The Coffee Machine: In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

* The Array Filterer: You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

* The Token Manager: You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

* The Shopping Cart Totalizer: You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

* The Window Scroller: You are developing a single-page application with a smooth scrolling effect. Implement a function named smoothScrollToTop that smoothly scrolls the window to the top when called.

*/

// Solution 1

let students = ["shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

let houses = []

for (const student of students) {
    if (student.length < 6) {
        houses.push("Gryffindor")
    }
    else if (student.length < 8) {
        houses.push("Hufflepuff")
    }
    else if (student.length < 12) {
        houses.push("Ravenclaw")
    }
    else {
        houses.push("Slytherin")
    }
}

console.log(houses)