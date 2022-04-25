# Event Delegation

## Problem:

Say we have 20 buttons in our document and we want all buttons to have the same functionality, one way to achieve that would be adding an event listener to every single button. However, that approach has 2 drawbacks:
**Performance**, the more event listeners you have on your page, the slower your page becomes.
**Later elements** that would be dynamically added to our document would also need their own event listeners manually added to them.

## Solution:

Using a technique called **Event Delegation**, we can add one single event listener to the parent element e.g. the **document** element, and then configure that event listener to run the callback function only when the target element has a specific identifier e.g. a **class** name or a **tag** name.

### Code example:

```JS
document.addEventListener('click', function(event) {
  if(event.target.tagName === 'BUTTON') alert('you clicked on a button!');
}
```

---

## Assignments:

**Assignment:** []()
**Solution:** []()

---

### Resources:

- [A Simple Explanation of Event Delegation in JavaScript](https://dmitripavlutin.com/javascript-event-delegation/)
