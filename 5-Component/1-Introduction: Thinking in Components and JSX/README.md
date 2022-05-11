# Introduction: Thinking in Components and JSX

Using the knowledge you have from the previous example, now lets fix the map function again but starting from an array of objects.

```js
const animals = [
  { label: "Horse" },
  { label: "Turtle" },
  { label: "Elephan" },
  { label: "Monkey" },
];
```

# :speech_balloon: Instructions

Update the code's [.map function](https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d) to create a new array of `<li>`'s that each of them corresponds one animal from the original array, the resulting array should be something like this:

```jsx
const animalsInHTML = [
  <li>Horse</li>,
  <li>Turtle</li>,
  <li>Elephant</li>,
  <li>Monkey</li>,
];
```

And include them all together inside the website.

#### :bulb: Hint

- You can use the second parameter of the map function as a `key` to uniquely identify each html item.

---

---

**Join a lesson:** https://nearpod.com

Please use the teacher's code to join the lesson

---

## Assignments:

**Assignment:** [SPA-component-first-component](https://classroom.github.com/a/q-zYK7pB)
**Solution:** [SPA-component-first-component]()

**Assignment:** [SPA-component-render-with-functions](https://classroom.github.com/a/REIzBtOV)
**Solution:** [SPA-component-render-with-functions]()

**Assignment:** [SPA-component-real-component](https://classroom.github.com/a/5P3WYZ8j)
**Solution:** [SPA-component-real-component]()

**Assignment:** [SPA-component-conditional-rendering](https://classroom.github.com/a/BYkFpsDn)
**Solution:** [SPA-component-conditional-rendering]()

---

### Resources:

- [Presentation PDF]()

- [create-react-app](https://github.com/facebook/create-react-app)

- [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)

- [React for Beginners – A React.js Handbook for Front End Developers](https://www.freecodecamp.org/news/react-beginner-handbook)
