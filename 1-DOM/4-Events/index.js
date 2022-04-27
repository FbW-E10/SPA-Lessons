// * THE EVENT OBJECT

// When an event listener is triggered and calls its associated function, it automatically passes a single ARGUMENT to the function
// This argument is a reference to the event object
// The event object contains a number of properties that describe the event which occurred

// ===============================================================================================

//####### select the elements ##########

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const blue = document.querySelector(".blue");
const yellow = document.querySelector(".yellow");
const login = document.querySelector(".login");

// --------------------------------
// addEventListener (click event)
// Listener is the callback function
const onGreenHandler = (e) => {
  if (e.target.style.backgroundColor === "pink") {
    alert("Fight back! remove blue! \n I'll change my color to black!");
    blue.remove();
    e.target.style.backgroundColor = "black";
    // e.target = green (element)
    // green.style.backgroundColor = "black";
  } else {
    alert("Green");
  }
};
green.addEventListener("click", onGreenHandler);

// adding an options object (call the event one time)
const onRed = () => alert("Red");
red.addEventListener("click", onRed, { once: true });

const onBlue = () => {
  //console.log(e);
  alert("blue: I am going to change green's background to pink");
  green.innerText = "😡 Elements battle start";
  green.style.backgroundColor = "pink";
  green.style.color = "red";
};

blue.addEventListener("click", onBlue);
// --------------------------------

// addEventListener (mouseover event)

const onYellow = (e) => alert("Yellow");
yellow.addEventListener("mouseover", onYellow);

// --------------------------------
// addEventListener (keydown event)

/*window.addEventListener("keydown", (e) => {
  // google and facebook !! this is very
  const key = e.key;
  // alert(key);
});*/
// ===============================================================================================
// addEventListener (submit event)

// * preventDefault()
// One extra useful thing to know about events is that we can prevent the default behaviour of the target element!
// E.g. if we have a checkbox, when it is clicked, it is checked/unchecked by DEFAULT.
// * We can prevent this behavior with preventDefault()

function onLogin(e) {
  e.preventDefault();
  let email = e.target.email.value;
  let password = e.target.password.value;
  const data = { email, password };
  alert(`The email ${email}, and password ${password} \n Submitted!`);
  console.log("Send the data to the backend ", data);
}

login.addEventListener("submit", onLogin);
