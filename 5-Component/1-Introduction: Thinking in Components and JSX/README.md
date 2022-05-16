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

**Join a lesson:** https://nearpod.com

Please use the teacher's code to join the lesson

---

## Assignments:

**Assignment:** [SPA-component-first-component](https://classroom.github.com/a/q-zYK7pB)
**Solution:** [SPA-component-first-component](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/5-Component/SPA-component-first-component-solution)

**Assignment:** [SPA-component-render-with-functions](https://classroom.github.com/a/REIzBtOV)
**Solution:** [SPA-component-render-with-functions](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/5-Component/SPA-component-render-with-functions-solution)

**Assignment:** [SPA-component-real-component](https://classroom.github.com/a/5P3WYZ8j)
**Solution:** [SPA-component-real-component](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/5-Component/SPA-component-real-component-solution)

**Assignment:** [SPA-component-conditional-rendering](https://classroom.github.com/a/BYkFpsDn)
**Solution:** [SPA-component-conditional-rendering](https://github.com/DigitalCareerInstitute/SPA-component-state-credit-card.git)

---

### Resources:

- [Presentation PDF]()

- [React Intro Video](https://www.youtube.com/embed/KgAN353TY-8?controls=0&modestbranding=1&rel=0&showinfo=0&loop=0&cc_load_policy=1&fs=0&end=459&hl=en&playsinline=1&start=21&widget_referrer=https%3A%2F%2Fn-ahza5h677qmarosfjgomemaequygzlgq6pyljpq-0lu-script.googleusercontent.com%2F&enablejsapi=1&origin=https%3A%2F%2Fwww.nearpod.com&widgetid=1)

- [create-react-app](https://github.com/facebook/create-react-app)

- [React in 100 Seconds](https://www.youtube.com/watch?v=Tn6-PIqc4UM)

- [React for Beginners – A React.js Handbook for Front End Developers](https://www.freecodecamp.org/news/react-beginner-handbook)
