# Error handling, "try...catch"

![enter image description here](https://www.tutsmake.com/wp-content/uploads/2020/05/try-catch-javascript.jpeg)

The **`try...catch`** statement marks a block of statements to try

```javascript
//With try...catch
try {
  // code...
} catch (error) {
  // error handling
}

//With then().catch()

.then(()=>{
    // code...
}).catch((error)=>{
    // error handling
})

```

The `try` statement lets you test a block of code for errors.
The `catch` statement lets you handle the error.

First, the code in `try {...}` is executed.
If there were no errors, then `catch (err)` is ignored: the execution reaches the end of `try` and goes on, skipping `catch`.
If an error occurs, then the `try` execution is stopped, and control flows to the beginning of `catch (err)`. The `err` variable (we can use any name for it) will contain an error object with details about what happened.

> So, an error inside the `try {...}` block does not kill the script – we have a chance to handle it in `catch`.

in this example catch is ignored :

```javascript
try {
  alert("Start of try runs"); // (1) <--

  // ...no errors here

  alert("End of try runs"); // (2) <--
} catch (err) {
  alert("Catch is ignored, because there are no errors"); // (3)
}
```

## Error object

```javascript
try {
  // ...
} catch (err) {
  // <-- the "error object", could use another word instead of err
  // ...
}
```

For all built-in errors, the error object has two main properties: `name` `message`

---

## ASYNC AWAIT

Promises are an important JS concept - you will see them a lot in modern JS and especially the next course module!

Remember: promise syntax is clearer than callback hell/"pyramid of doom" syntax.

However, there is a way to make promise syntax even more simple, which means we don't need the .then() statement.

Note: Async-await syntax can ONLY be used for functions!
To use the syntax, first you must use the "async" keyword in front of your asynchronous function:

ES5 example:

```JS
async function doSomething() {
    // Do something...
}

// ES6 example

const doSomething2 = async () => {
    // Do something
}

```

Once you make a function asynchronous using "async" it _automatically returns a promise_

We can now use the second keyword: "await".
We put this keyword in front of any promise...

```JS
const blackFriday = true;

function amazonPromise() {
  return new Promise((resolve, reject) => {
    if (blackFriday === true) {
      // rejected
      reject(" Sorry for not sending your article on time 😐");
    } else {
      // fulfilled
      resolve(" this is your product as promised 🙂");
    }
  });
}

//
async function amazon() {
  try {
    let result = await amazonPromise();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

amazon();

/*
***** Old way to handle promises *****
const promise = amazonPromise();

promise.then((msg)=>{
    console.log(msg);
});
promise.catch((msg)=>{
    console.log(msg);
});

console.log(promise);
*/
```

---

## Assignments:

**Assignment:** [Browser-fetch-promises( use try..catch with async..await instead of .then().catch() )](https://github.com/FbW-E10/SPA-Assignments-Solutions/tree/main/3-Asyncronous%20Programming/Browser-fetch-promises-solution)
**Solution:** [Browser-fetch-promises]()

**Assignment:** [Browser-fetch-JSON](https://classroom.github.com/a/rETodL9i)
**Solution:** [Browser-fetch-JSON]()

**Assignment:** [DOM-Calculator (optional)](https://classroom.github.com/a/KrgceRDh)
**Solution:** [DOM-Calculator]()

---

### Resources:

- [Error handling, "try...catch"](https://javascript.info/try-catch)
- [JavaScript Async Await (youtube)](https://www.youtube.com/watch?v=V_Kr9OSfDeU)

- [How to use JSON.stringify() and JSON.parse() in JavaScript](https://javascript.plainenglish.io/how-to-use-stringify-and-parse-in-javascript-6b637b571a32#:~:text=as%20a%20pair.-,JSON.,it%20into%20a%20JavaScript%20object.)
