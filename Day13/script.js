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
        if (getNextData) {
            getNextData();
        }
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
    getData(2, () => { // 2s callback
        console.log("getting data3 ...");
        getData(3, () => { // 2s callback
            console.log("getting data4 ...");
            getData(4);
        });
    });
});

// --------------------------------------------------------------------------------------------------

/*

* Promises -> is an object representing eventual completion or failure of an asynchronous operation or task.
* It is a solution to callback hell.
* Example
let promise = new Promise((resolve, reject) => {...}) // function with 2 handlers i.e. resolve and reject
* resolve and reject are callbacks provided by JS.

*/
// Example of creating our own promise
// let promise = new Promise((resolve, reject) => {
//     console.log("I'm a promise");
//     resolve("success");
//     reject("some error occurred");
// });
// console.log(promise);

// Promise State
// 1. Pending State -> the result is undefined
// 2. Resolved State -> the result is a value (fulfilled)        // resolve(result)
// 3. Rejected State -> the result is an error object            // reject(error)

// Example of an API here getNewData return some data in promise
function getNewData(dataId, getNextData) { // assume it takes 2 sec to search dataId from the database
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("data", dataId); // in case err: 
            // resolve("success");
            reject("error");
            if (getNewData) {
                getNewData();
            }
        }, 5000);
    });
}

let promise = getNewData(123);
console.log(promise);

// ----------------------------------------------------------------------------------------------------------

/*

* Question -> How do we use promises after receiving
* .then() and .catch()

* promise.then((res) => {...});

* promise.catch((err) => {...});

*/

// Example

const ourOwnPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I'm a promise");
        // resolve("success");
        reject("network error");
    });
}

let finalPromise = ourOwnPromise();
promise.then((res) => {
    console.log("promise fulfilled", res);
});

finalPromise.catch((err) => {
    console.log("rejected", err);
})
// ------------------------------------------------------------------------------------------------
// function getNewDataFromDatabase(dataId, getNextData) { // assume it takes 2 sec to search dataId from the database
function getNewDataFromDatabase(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
            // if (getNextData) {
            //     getNextData();
            // }
        }, 2000);
    });
}

// let receivedPromise = getNewDataFromDatabase(123);
// console.log(receivedPromise);

// ----------------------------------------------------------------------------------------------

/*

* Promise Chain

*/

// Example of promise chain on callback hell problem example
// let p1 = getNewDataFromDatabase(1);
// getNewDataFromDatabase(1).then((res) => { // 3sec data 1 came
//     console.log(res);
//     getNewDataFromDatabase(2).then(() => { // 3sec data 2 came
//         console.log(res);
//     })
// })
// Actual way is to just return data that we received
getNewDataFromDatabase(1).then((res) => { // 3sec data 1 came
    console.log(res);
    return getNewDataFromDatabase(2);  // 3sec data 2 came
}).then((res) => {
    console.log(res);
    return getNewDataFromDatabase(3); // 3sec data 3 came
}).then((res) => {
    console.log(res);
})



// ---------------------------------------------------------------------------------------------------------
// Promise Chain Example
function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}

// console.log("fetching data1 ...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
// });

// console.log("fetching data2 ...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });
// -----------------------------------------------------------------------
// promise chaining -> ek then k andar dusra promise resolve ho.
// console.log("fetching data1 ...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("fetching data2 ...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     });
// });
// ------------------------------------------------------------
console.log("fetching data1 ...");
asyncFunc1().then((res) => {
    console.log(res);
    console.log("fetching data2 ...");
    asyncFunc2().then((res) => {
        console.log(res);
    });
});

// -------------------------------------------------------------------------------------------------------

