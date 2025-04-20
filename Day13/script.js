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
* Nested callbacks stacked below one another forming a pyramid structure. (Pyramid of Doom)
* This style of programming becomes difficult to understand and manage.

*/

// nesting if ...else example
let age = 19;
if (age >= 18) {
    if (age >= 60) {
        console.log("senior");
    } else {
        console.log("middle");
    }
} else {
    console.log("child");
}

// --------------------------------------------------------------

// nesting loop example
for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str = str + j;
    }
    console.log(i, str);
}
// ----------------------------------------------------------------------------------------------------------------
// nesting callback known as Callback Hell form (Pyramid of Doom)

function getData(dataId, getNextData) { // assume it takes 2 sec to search dataId from the database
    // console.log("data", dataId);
    setTimeout(() => {
        console.log("data", dataId);
    }, 2000);
}

// getData(2, getNextData) // 2s
// getData(3, getNextData) // 2s
// getData(4, getNextData) // 2s

// coming from database
//data1 
//data2 
//data3 
//data4 

// Example of nesting callback known as Callback Hell (Pyramid of Doom)
getData(1, () => { // 2s here data 1 is came and getting of data 2 through callback
    console.log("getting data2 ...");
    getNextData(2, () => { // 2s callback
        console.log("getting data3 ...");
        getData(3, () => { // 2s callback
            console.log("getting data4 ...");
            getData(4);
        });
    })
})

