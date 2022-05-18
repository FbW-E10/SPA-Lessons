# Data flow: Props & States definitions & difference

**1 - "Props" in React**

"props" are an important concept in React.

React components can have "props" - short for "properties".
​
We can use props to pass data between components.

So if a parent component has some data that it wants to pass to a child component, it can use props to do that.



... The Parent can use props to give each Child only the data it needs.

​
Props are READ-ONLY. We must never try to change a prop inside a component.

We will talk in more detail about why shortly.
​
Let's have an example of props and why they are so useful...
​

Key code from the introduction:

​
Create SayHello functional component, which uses "props" to know what to render each time we create an instance

```JS
const SayHello = props => {
    return <p>Hello { props.firstName }, you are { props.age }!</p>
}
```

​
Create 3x <SayHello /> components - each time give different data using "props"...

... so each instance renders something different!

Note: when we add props to a component, we use the same kind of syntax as with HTML attributes, e.g. <div "style="..." class="..." id="...">

```JS
let content = (
    <>
        <SayHello firstName={jamie} age={34} />
        <SayHello firstName={bob} age={99} />
        <SayHello firstName="Englebert" age={20} />
    </>
);
```

---

**2 - "State" in React**

"State" is an important concept when it comes to understanding how React works...
​
If we try to update our app using traditional variables, it won't change in the browser.

React will only re-render the UI when it is TOLD to do so - it won't do this automatically.

Instead, you will have to tell React when it should re-render the UI, to respond to some kind of change we want the user to see.

​
**What is state?**
​

Any React component can have a STATE some values that it "remembers" and can update over time.

The state of a React component at a certain time is like a "snapshot", a "photograph" of the STATE of that component at that time.

​
**Ok, but can't we just use normal variables?**

​
Using state, we can "keep track" of how the data in our application changes over time. This is known, as "state management".

If you update the state of a React app, it will automatically re-render the UI to account for what changed / to show the latest information.

This link - between making _changes_ to the app's state and re-rendering the UI to reflect those changes - is what makes "state" so important.

You would NOT have this link if you just used normal variables.

​
Sounds good - how can we use state in a React app?

​
It used to be the case that only class-based components could use state - they were known as "stateful" components.

However, since 2019 we have also been able to use state in functional components, removing this advantage from class-based components.

We can use "state" inside a functional component using React "hooks".
​

**Hooks?**

​
A React "hook" is a way of declaring and managing a value that your functional component needs to keep track of over time.

To make a hook in one of your components, your first need to import something extra from React...

```JS
import React, { useState } from "react";
```

​
**And then?**
​

First, we declare an array with two items in it:

- The first item should be a variable you want your compnent to "keep track of"
  (This variable should have a unique, meaningful name, so it is easier to use/update over time)

- The second item should be a function which will let us change the variable to a different value

​
Finally, to initialize the hook, we should call "useState" (which we imported above).

The argument we give useState will be the initial, "starting" value of the variable we just created.

---



---

## Assignments:

**Assignment:** [SPA-calculator](https://classroom.github.com/a/nPglUWBS)
**Solution:** [SPA-calculator]()

**Assignment:** [SPA-component-trello-copy](https://classroom.github.com/a/0HTeCdBv)
**Solution:** [SPA-component-trello-copy]()

---

### Resources:

- [React State Vs Props](https://www.youtube.com/watch?v=IYvD9oBCuJI)

- [React.js for Beginners — Props and State Explained](https://www.freecodecamp.org/news/react-js-for-beginners-props-state-explained/#:~:text=Props%20are%20used%20to%20pass,cannot%20be%20accessed%20from%20outside)
