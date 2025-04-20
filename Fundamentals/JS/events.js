/*

* 2. Events handling in JS

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

// 3. Event Listener -> are the function which always ready to listen for every event occur.
// Note -> We can create multiple eventListener for one event.
/*
Example 1
node.addEventListener(event, callback); // here callback also called as handler.

Example 2
node.removeEventListener(event, callback); // here callback also called as handler which you want to remove.

Note -> the callback reference should be same to remove

Drawbacks

1. inline event handling -> make our html code bulky.
2. event handling into js file -> ek baar m ek hi function ko likhkar hm apne event ko handle kar sakte hai.

*/

// 3. Event Listener -> is the better way as compared to inline event handling and event handling on js file
// Example
let btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {   // node.addEventListener(event, callback); 
    console.log("button 2 was clicked - handler1");
})

btn2.addEventListener("click", () => {   // node.addEventListener(event, callback); 
    console.log("button 2 was clicked - handler2"); // we can perform multiple work from the same event using eventListener
})

btn2.addEventListener("click", handler3);

btn2.addEventListener("click", (e) => {   // we can also access event object as an argument
    console.log("button 2 was clicked - handler4"); // we can perform multiple work from the same event using eventListener
    console.log(e); // here e is the event object
    console.log(e.target); // here button2 element is the target
    console.log(e.type); // here type is click
    console.log(e.clientX); // means horizontally m kaha pr event occur hua.
    console.log(e.clientY); // means vertically m kaha pr event occur hua.
})

// Note -> If we want to remove third event handler than we can call to node.removeEventListener(event, callback);
// Note -> But the callback reference should be same to remove
// Means that jis bhi callback function ko remove karna hai vo remove callback function m bilkul same hona chahiye.

const handler3 = () => {   // this callback function takes separate space in memory. 
    console.log("button2 was clicked - handler3 is removed");
}

btn2.removeEventListener("click", handler3); // Now handle 3 callback function is removed from button 2