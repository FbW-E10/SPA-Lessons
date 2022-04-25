//1) alert & prompt:

const greeting = () => {      // declaring a function named 'greeting' and assigning it to its content using arrow syntax 
  let username = prompt("what's your name?"); // same as window.prompt() we can omit window. since 'window' is the global object
  alert("Hi " + username);                    // same as window.alert
};

// greeting();     // calling the function.

console.log(window);  // checking the window object, this will print in the browser (rightClick > inspect > console -in chrome-)
//===================================================================================================================

//2) Selecting HTML elements using getElementById getElementsBy....  (not recommended):

let about = document.getElementById("about");  // returns a single OBJECT of the selected element.

let spanArr = document.getElementsByClassName("menuBtn"); // returns an HTMLCollection which is an array-like list (can only accepts 'length' and the index [i])

// spanArr.forEach((item) => (item.style = "background-color: rgb(111,222,222)")); // will not work
// spanArr[1].style = "background-color: rgb(111,222,222)"; // will work
// console.log(spanArr.length); // will work
//=====================================================================================================================

//3) Selecting HTML elements using querySelectorAll & querySelector  (recommended):

let contact = document.querySelector("#contact");  // querySelector returns a single OBJECT of the selected element.

let btn = document.querySelector(".menuBtn"); // when a 'class' is passed as an argument, it will select the first recurring element with this class (same thing if a 'tag'(the element name) is passed).

let menuBtn = document.querySelectorAll(".menuBtn"); // querySelectorAll returns a NodeList which is an ARRAY of objects of the selected elements.
//======================================================================================================================

//4) Manipulating the previously selected elements (about, spanArr, contact, btn, menuBtn):

btn.style = "background-color: rgb(111,222,222)";  // adding a style to the btn element using .style
about.style = "background-color: rgb(111,222,222)";  // adding a style to the about element using .style

// contact.textContent="hello from js";   // this will replace the content of the 'contact' element to the assigned string.


menuBtn.forEach((item) => {        // using the array method forEach on the array menuBtn to add style to each of its items.
    item.style = "background-color: rgb(111,222,222)";
  //   item.innerText = "something";  // this will replace the content of each item to the assigned string.
  });
//==========================================================================================================================

//5) Creating new HTML element using createElement, filling it with some value and appending it to a parent element

let pTag = document.createElement("p");  // creating a 'paragraph' element.

pTag.textContent = "hello from js";      // filling it with the string 'hello from js'.

contact.appendChild(pTag);    // appending it to a parent element 'contact' (the parent element must be selected first -line 26-).
//===========================================================================================================================

//6) Manipulating the classList of an element (add,remove,replace):

contact.classList.add('dark');


