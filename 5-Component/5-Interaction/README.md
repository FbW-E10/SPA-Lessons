# Interaction: Events in React

​
When using vanilla JavaScript, we learned that the best way to handle events is via an event listener:

```JS
const button = document.querySelector("button");

button.addEventListener("click", doSomething);
```

However, there is an option to use an event handler inside the HTML element itself.


​

## 1. HTML

```JS
<button onclick="doSomething()"></button>
```

In React, using this kind of event handler is actually best practice, with a few small style changes

​

## 1. React (JSX)

​

```JS
<button onClick={doSomething}></button>
```

**A. Written in camel-case**

**B. Uses React's "curly brace" syntax, rather than a string**

**C. Passes a pointer to the function you want to run, rather than calling the function**
​

---

​
**A note on synthetic events in React**
​

When React detects an event, e.g. a user clicks a button with a "click" event handler...

The event handler will be passed an instance of SyntheticEvent - a cross-browser wrapper around the browser's native event.

A SyntheticEvent can be thought of as a "React event", or an "event in React"

It works the same way as the browser's native event (including the stopPropagation() and preventDefault() methods)

Except SyntheticEvents work identically across all browsers.

React still has the same types of event as usual!
​
​

---



---

## Assignments:

**Assignment:** [SPA-events-Iron-Hack](https://classroom.github.com/a/MvzqIcPJ)
**Solution:** [SPA-events-Iron-Hack]()

**Assignment:** [SPA-events-chronometer](https://classroom.github.com/a/mBvMAHI-)
**Solution:** [SPA-events-chronometer]()

**Assignment:** [SPA-component-trello-copy](https://classroom.github.com/a/0HTeCdBv)
**Solution:** [SPA-component-trello-copy]()

---

### Resources:

- [Handling Events](https://reactjs.org/docs/handling-events.html)

- [Class Components vs Functional Components in React](https://www.youtube.com/watch?v=yc6elaGOoGQ)

