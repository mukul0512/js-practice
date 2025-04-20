/*

* Events handling in JS

* The change in the state of object is known as Event
* Events are fired to notify code of "interesting changes" that may affect code execution.
* Examples of event occur
* Mouse events (click, double click, etc)
* Keyboard events (keypress, keyup, keydown)
* Form events (submit etc)
* Print events etc

*/

/*

node.event = () => { // node can be div, button etc
    handle here
}

*/

// Example 1 onmouseover

let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("Mouse is hover");
}

// Example 2 onClick
let btn = document.querySelector("#btn");
btn.onClick = () => {
    console.log("btn is clicked");
    let a = 25;
    a++;
    console.log(a);
}

// Event Object
/*

* It is a special object that has details about the event.
* All event handlers have access to the Event Object's and methods.
Example
node.event = (e) => {
    handle here
}

e.target, e.type, e.clientX, e.clientY

e.clientX -> means horizontally m kaha pr event occur hua.
e.clientY -> means vertically m kaha pr event occur hua.

Note -> e.clientX, e.clientY is used when we are building a game where position of screen is needed.

*/

// Example 1 onClick

let btn1 = document.querySelector("#btn1");
btn1.onClick = (e) => {
    console.log(e); // here e is the event object
    console.log(e.target); // here button element is the target
    console.log(e.type); // here type is click
    console.log(e.clientX); // means horizontally m kaha pr event occur hua.
    console.log(e.clientY); // means vertically m kaha pr event occur hua.
}

// Example 2 onmouseover

let div = document.querySelector("div");
div.onmouseover = (e) => {
    console.log("Mouse is hover");
    console.log(e); // here e is the event object
    console.log(e.target); // here div element is the target
    console.log(e.type); // here type is hover
    console.log(e.clientX); // means horizontally m kaha pr event occur hua.
    console.log(e.clientY); // means vertically m kaha pr event occur hua.
}

