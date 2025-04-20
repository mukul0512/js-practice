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

