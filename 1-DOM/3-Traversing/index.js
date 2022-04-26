//7) Traversing (Selecting HTML element(s) by its parent, children or siblings elements)

const nav = document.querySelector("nav");

//a) selecting the parent element:

let parentOfNav = nav.parentElement;
parentOfNav.style = "background-color: #000";

//b) selecting the children elements:

let childrenOfNav = nav.children; // HTMLCollection (array-like list only accepts .length and the index)
childrenOfNav[0].style = "background-color: #fff";
//c) selecting the previous sibling (siblings are on the same level):

let imgContainer = nav.previousElementSibling;
imgContainer.style = "width: 100px; background-color: #fff";

//d) selecting the next sibling:

let about = document.querySelector("#about");
let contact = about.nextElementSibling;
    contact.style="background-color: rgb(111,222,222)"

// side note: to get the element's name (tag) you can use .nodeName method as follows:
console.log(about.nodeName); // returns DIV
