## useReducer()

**Definition:**

- A react hook that is similar to useState hook but also allows for custom state logic.

**Use case:**

- It is used for complex state logic.

unlike useState where you had to write the state logic (the logic by which the state should update or change) in a separate function (like handleClick or handleSubmit ...), with useReducer you can write that logic as part of the hook itself.

**How does it look like?**

- Like the useState before the (=) sign it starts with const [state, dispatch] where state is a variable and dispatch is a function but a bit different from setState in useState.

- useReducer has 2 parameters: reducer (a function) and initialState (it can be an object or array or str...) like this:

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

**How does it work?**

- The logic will be written in the reducer function.
- The reducer function also has 2 parameters: state (refers to previous state sometimes written as prevState) and action like this:

```js
function reducer(state, action) {
  //===== your logic =====
}
```

- The second parameter (action) is usually an object that contains a property called 'type' which you can use to specify how the state should change if an action of 'some' type was passed to the dispatch function, you can use 'if' statements when it's just a couple of conditions like this: 

```js
function reducer(state, action) {

  if (action.type === "alpha") {
    return //==== the new state ====

 } else if(action.type==="beta") {
    return //==== the new state ==== 

 } else {
     return state;
 }
}
```
Or use 'switch' for multiple conditions (more famous) , like this:

```js
function reducer(state, action) {

  switch (action.type){
      case "alpha":
          return //=== the new state ===
      
      case "beta":
          return //=== the new state ===
      
      case "gamma":
          return //=== the new state ===

      default: 
          return state;
  }
}
```

**Side Note:** in the default option inside the 'switch' you can also throw an error instead of returning the state, like this:

```js
 default:
      throw new Error();
  }
```

- The only thing left now is to use the dispatch function in some event (onClick, onChange....) and pass an action to it, like this:

```js
onClick = {()=> dispatch({type: "alpha"}) }
```

which will update the state according to the logic in the "alpha" condition.

---

---

## Assignments:

**Assignment:**

---

### Resources:

- [youtube tutorial](https://www.youtube.com/results?search_query=usereducer)
- [w3schools](https://www.w3schools.com/react/react_usereducer.asp)
- [a toDo app example with useReducer](https://www.robinwieruch.de/react-usereducer-hook/)
