/*

* Given 5 boxes, assign a random color and a random backgroundColor to each box using DOM concepts.


*/

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

// selecting by id, class, query selector 

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

// query selector --> it select first box whose class name is box2 
console.log(document.querySelector(".box2"));
let boxes3 = document.querySelector(".box2");
console.log(boxes3);
console.log(boxes3.style.backgroundColor = "purple");

// ----------------------------------------------------------------------------------------

// querySelectorAll --> it return NodeList of all the html collection whose class name is box2 
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

// Inserting and removing elements 

// innerHTML
console.log(document.querySelector(".box3").innerHTML);
console.log(document.querySelector(".container3").innerHTML);
let boxes5 = document.querySelector(".box3").innerHTML;
console.log(boxes5);

// outerHTML
console.log(document.querySelector(".box3").outerHTML);
console.log(document.querySelector(".container3").outerHTML);
let boxes6 = document.querySelector(".box3").outerHTML;
console.log(boxes6);

// tagName --> applicable only for element nodes
console.log(document.querySelector(".box3").tagName);
console.log(document.querySelector(".container3").tagName);
let boxes7 = document.querySelector(".box3").tagName;
console.log(boxes7);

// nodeName --> applicable for all types of node like comment, text etc
console.log(document.querySelector(".box3").nodeName);
console.log(document.querySelector(".container3").nodeName);
let boxes8 = document.querySelector(".box3").nodeName;
console.log(boxes8);

// textContent
console.log(document.querySelector(".box3").textContent);
console.log(document.querySelector(".container3").textContent);
let boxes9 = document.querySelector(".box3").textContent;
console.log(boxes9);

// hidden --> 
console.log(document.querySelector(".box3").hidden);
console.log(document.querySelector(".container3").hidden);
let boxes10 = document.querySelector(".box3").hidden;
console.log(boxes10);

//change innerHTML
console.log(document.querySelector(".box3").innerHTML = "Updated");
console.log(document.querySelector(".container3").innerHTML);
let boxes11 = document.querySelector(".box3").innerHTML;
console.log(boxes11);

// Attributes elements method

// hasAttribute
console.log(document.querySelector(".box3").hasAttribute("style"));
// setAttribute
console.log(document.querySelector(".box3").setAttribute("style", "display: inline"));
// removeAttribute
console.log(document.querySelector(".box3").removeAttribute("style"));
// element.attributes - to get the collection of all the attribute
console.log(document.querySelector(".box3").attributes);
// designMode = "on"
console.log(document.designMode = "on");
// data attribute
console.log(document.querySelector(".box3").dataset);
console.log(document.querySelector(".box3").dataset);

// createElement
let div = document.createElement("div");
div.innerHTML = "I have been inserted <b>by mukul karnwal </b>"
div.setAttribute("class", "created");
console.log(div);

// insert element using append, prepend, before, after, replaceWith
console.log(document.querySelector(".container3").append(div));
console.log(document.querySelector(".container3").prepend(div));
console.log(document.querySelector(".container3").before(div));
console.log(document.querySelector(".container3").after(div));
console.log(document.querySelector(".container3").replaceWith(div));

// insertAdjacentHTML/Text/Element
let cont5 = document.querySelector(".container3");
console.log(cont5.insertAdjacentHTML("afterend", <b>I'm inserted afterend</b>));
console.log(cont5.insertAdjacentHTML("afterbegin", <b>I'm inserted afterbegin</b>));
console.log(cont5.insertAdjacentHTML("beforebegin", <b>I'm inserted beforebegin</b>));
console.log(cont5.insertAdjacentHTML("beforeend", <b>I'm inserted beforeend</b>));

// remove
console.log(document.querySelector(".container3").remove());

// classList
console.log(document.querySelector(".container3").classList);
// to add in classList
console.log(document.querySelector(".container3").classList.add("MukulKK"));
// to remove in classList
console.log(document.querySelector(".container3").classList.remove("MukulKK"));
// toggle
console.log(document.querySelector(".container3").classList.toggle("red"));
console.log(document.querySelector(".container3").classList.toggle("red"));
// className
console.log(document.querySelector(".container3").className);


// --------------------------------------------------------------------------------------------