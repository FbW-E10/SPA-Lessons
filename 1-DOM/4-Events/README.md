# Events: User Events (interaction) and Browser Events.

Events are the actions entered to the browser by the user e.g. click or keypress. By passing the **event** object as a **parameter** to the callback function, we get to use many methods and properties of that specific event.
p.s. feel free to `console.log(event);` in order to see those properties and methods.

# addEventListener( );

When we want an HTML element to react to a certain event e.g. 'click' we can add a **listener** that would listen to the event and fire a callback function when that event is triggered :
`myElement.addEventListener('click', () => console.log('click event triggered!');`

## addEventListener Options

As a third parameter to the addEventListener method, we can add an options object that would give us more control over the event e.g. we can allow the event to be triggered only once by adding :
`myElement.addEventListener('click', myFunction, { once: true });`

## Special Events

Some HTML elements have **special events** e.g. an HTML form has the event **submit** , so we can listen to that event and run a callback function :
`myForm.addEventListener('submit', myFuntion);`

The **input** elements have various events such as change and input.

Other special events can be related to the **mouse** or the **keyboard** e.g. mouseover, mouseout, dblclick, keyup, keydown, keypress etc.

## Default behaviour

Some events have a **default** behaviour e.g. an HTML form refreshes the page after the submit event is triggered. We can prevent the **form** from refreshing the page by including the following line **inside** the body of the callback function :
`event.preventDefault();`

# removeEventListener( );

We can remove an event listener as well as the callback function from an HTML element if the callback function was **created once** and passed as a nonymous function, using the **function's name** or variable e.g. we can remove the listener that listens for the click event on myElement :
`myElement.removeEventListener('click', myFunction);`

# Event Propagation

Targeting an HTML element that is included within another element will also target the parent element by default, that is what we call **event bubbling** . We can stop that by including the following line **inside** the body of the callback function :
`event.stopPropagation();`

---

## Assignments:

**Assignment:** [Browser-WeekendCountdown](https://classroom.github.com/a/UEdWu0X_)
**Solution:** []()

**Assignment:** [Browser-ToggleItems](https://classroom.github.com/a/Wg0iL7aC)
**Solution:** []()

**Assignment:** [Browser-Calculator](https://classroom.github.com/a/-4EabhGP)
**Solution:** []()

---

### Resources:

- [Learn JavaScript Event Listeners (video)](https://www.youtube.com/watch?v=XF1_MlZ5l6M)

- [Date Global Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [toLocaleDateString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString)
- [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

- [innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

- [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)

- [HTML DOM Element contains](https://www.w3schools.com/jsref/met_node_contains.asp)

- [use Bootstrap CDN](https://getbootstrap.com/docs/5.1/getting-started/introduction/)

- [Window: load event](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event)

- [Event.stopPropagation](https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation)
