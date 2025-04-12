// Dom vs BOM
console.log(document.title = "DOM vs BOM");
console.log(document.body);
console.log(document.body.style.backgroundColor = "green");

// --------------------------------------------------------------

// How do we access Parents, Children, Sibling Nodes 
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

