# `01.5` Building from arrays

With JSX you can also create **arrays** of HTML items. E.g: If we have an array of `<li>` we can include all of them into the document at once like this:

```jsx
const namesInHTML = [
  <li>Bob Dust</li>,
  <li>Fredy Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>,
];

const content = <ul>{namesInHTML}</ul>;

ReactDOM.render(content, document.querySelector("#root"));
```

The resulting HTML on the website will be:

```html
<div id="root">
  <ul>
    <li>Bob Dust</li>
    <li>Fredy Mercury</li>
    <li>Shazam Nikola</li>
    <li>Wilibin Walabam</li>
  </ul>
</div>
```

#### Hint:

- React will ask you to use keys on each item of the array, [you can read more about it here](https://reactjs.org/docs/lists-and-keys.html#keys).
- Remember to use `className` instead of `class`.
