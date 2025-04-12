// Dom vs BOM
console.log(document.title = "DOM vs BOM");
console.log(document.body);
console.log(document.body.style.backgroundColor = "green");

// --------------------------------------------------------------

// How do we access Parents, Children, Sibling Nodes from body
console.log(document.body.childNodes[0]);  //  #text
console.log(document.body.childNodes[1]);  // div.container
console.log(document.body.childNodes[1].childNodes[0]); // #text
let cont = document.body.childNodes[1];
console.log(cont.firstChild); // #text
console.log(cont.lastChild); // #text
console.log(cont.style.backgroundColor = "yellow"); // yellow
// console.log(cont.firstElementChild.style.backgroundColor = "red"); // red
// console.log(cont.lastElementChild.style.backgroundColor = "purple"); // purple
console.log(cont.firstElementChild.childNodes[1].style.backgroundColor = "white"); // white
console.log(cont.lastElementChild.childNodes[1].style.backgroundColor = "white"); // purple
// ---------------------------------------------------------------------------------------------
// How do we access Parents, Children, Sibling Nodes from body
let contChild = document.body.firstElementChild.children;
console.log(contChild[0].style.backgroundColor = "red");
console.log(contChild[1].style.backgroundColor = "blue");
console.log(contChild[2].style.backgroundColor = "purple");
console.log(contChild[3].style.backgroundColor = "orange");
console.log(contChild[4].style.backgroundColor = "khaki");
console.log(contChild[5].style.backgroundColor = "brown");
console.log(contChild[6].nextElementSibling.style.backgroundColor = "cyan");
console.log(contChild[7].previousElementSibling.style.backgroundColor = "pink");
console.log(contChild[7].parentElement.style.backgroundColor = "pink");

// --------------------------------------------------------------------------------------------------------
// How do we access Parents, Children, Sibling Nodes inside table
console.log(document.body.children);
let conTableChild = document.body.children[1];
console.log(conTableChild.caption.style.backgroundColor = "purple");
console.log(conTableChild.style.backgroundColor = "red");
console.log(conTableChild.rows);
console.log(conTableChild.rows[0].style.backgroundColor = "khaki");
console.log(conTableChild.rows[1].style.backgroundColor = "yellow");
console.log(conTableChild.rows[2].style.backgroundColor = "pink");
console.log(conTableChild.rows[3].style.backgroundColor = "brown");
console.log(conTableChild.lastElementChild.style.backgroundColor = "cyan");

// -------------------------------------------------------------------------------------------------------------

// selecting by id, class, quarry selector 

// class selector
let boxes = document.getElementsByClassName("box2");
console.log(boxes);
console.log(boxes[0].style.backgroundColor = "red");
console.log(boxes[1].style.backgroundColor = "blue");
console.log(boxes[2].style.backgroundColor = "yellow");
console.log(boxes[3].style.backgroundColor = "khaki");
console.log(boxes[4].style.backgroundColor = "brown");

// --------------------------------------------------------------------------

// id selector
console.log(document.getElementById("box2"));
let boxes2 = document.getElementById("box2");
console.log(boxes2);
console.log(boxes2.style.backgroundColor = "white");

// ----------------------------------------------------------------------

// quarry selector --> it select first box whose class name is box2 
console.log(document.querySelector(".box2"));
let boxes3 = document.querySelector(".box2");
console.log(boxes3);
console.log(boxes3.style.backgroundColor = "purple");

// ----------------------------------------------------------------------------------------

// quarrySelectorAll --> it return NodeList of all the html collection whose class name is box2 
// To change the backgroundColor using this we need to run a forEach loop.

console.log(document.querySelectorAll(".box2").forEach(e => {
    console.log(e);
    // console.log(e.style.backgroundColor = "orange");
}));

let boxes4 = document.querySelectorAll(".box2").forEach(e => {
    console.log(e.style.backgroundColor = "orange");
});
console.log(boxes4);

// -----------------------------------------------------------------

// tagName --> it return HTMLCollection and select all the div 
console.log(document.getElementsByTagName("div"));
let tagName = document.getElementsByTagName("div");
console.log(tagName);

// ----------------------------------------------------------------------------------------------------

// matches(), closest(), contains() methods

// element.matches()  
let e = document.getElementsByTagName("div");
console.log(e[4].matches("#box2"));
// element.closest()
console.log(e[3].closest(".container"));
console.log(e[3].closest("html"));
// .contains()
console.log(document.querySelector(".container").contains(e[2]));

// --------------------------------------------------------------------------------------------------------

