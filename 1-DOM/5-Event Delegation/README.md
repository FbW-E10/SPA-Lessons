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

**Assignment:** [Browser-PasswordField](https://classroom.github.com/a/joFHem1F)
**Solution:** [Browser-PasswordField](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/1-DOM/Browser-PasswordField-solution)

**Assignment:** [DOM-hideMessagesWithDelegation](https://classroom.github.com/a/DWWYScY4)
**Solution:** [DOM-hideMessagesWithDelegation](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/1-DOM/DOM-hideMessagesWithDelegation-solution)

**Assignment:** [Browser-DynamicPills](https://classroom.github.com/a/uVGdYG2t)
**Solution:** [Browser-DynamicPills](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/1-DOM/Browser-DynamicPills-solution)

**Assignment:** [Browser-Dropdown (Bonus)](https://classroom.github.com/a/kh-lY8qX)
**Solution:** [Browser-Dropdown (Bonus)](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/1-DOM/Browser-Dropdown-solution)

---

### Resources:

- [A Simple Explanation of Event Delegation in JavaScript](https://dmitripavlutin.com/javascript-event-delegation/)

- [Element.append()](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)

- [Element.prepend()](https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend)
