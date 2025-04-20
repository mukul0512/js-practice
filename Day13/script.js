/*

* async await >> promise chains >> callback hell

*/
// --------------------------------------------------------------------------------------------

/*
Synchronous Programming Example
* synchronous means the code run in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

*/
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
// -------------------------------------------------------------
/*

Asynchronous Programming Example
* Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

*/
// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000); // timeout
console.log("one");
console.log("two");


setTimeout(() => {
    console.log("hello");
}, 2000);

console.log("three");
console.log("four");

/*

* callbacks -> is a function passed as an arguments to another function.

*/

// Example of callback in synchronous programming
function sum(a, b) {
    console.log(a + b);
}

function calculator(a, b, sumCallback) {
    sumCallback(a, b);
}
// calculator(1, 2, sum);
calculator(1, 2, (a, b) => {
    console.log(a + b);
});

// Example of callback in Asynchronous programming

const helloWorld = () => {
    console.log("Hello World");
}

setTimeout(helloWorld, 3000);

// -------------------------------------------------------------------------

/*

* callback hell 
* 

*/