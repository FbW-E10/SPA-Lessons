# PROMISES

Imagine if we want to run one asynchronous operation, and then another once the first is finished...
... and then a third when the second is finished...
... and so on!

```JS
firstFunction(() => {
    // When firstFunction finishes executing, then call...
    secondFunction(() => {
        // When secondFunction finishes executing, then call...
        thirdFunction(() => {
            // When thirdFunction finishes executing, then call...
            fourthFunction(() => {
                // When fourthFunction finishes executing, then call...
                fifthFunction(() => {
                    // When fifthFunction finishes executing, then do something and finally finish callback hell!
                })
            })
        })
    })
});
```

This is an example of CALLBACK HELL!

What is the solution to callback hell?

**Promises!**

Promises allow us to use just one level of nesting in our code - so operations like the above become a lot easier to read!

"DO SOMETHING - THEN DO SOMETHING ELSE - THEN DO SOMETHING ELSE..."

```
// * Example of callback hell syntax:

// Do something
    // Do something else
        // Do something else

// * Example of promise syntax:

// Do something
//.THEN do something else
//.THEN do something else
```

---

Why do we even need promises?

To handle async code correctly!

```JS
const getDataUnsuccessfully = () => {
    let data;
    setTimeout(() => {
        console.log("Data returned from server!");
        data = "Lots of data";
        return data;
    }, 5000);
}

// Because the "data request" takes 5 secs, JS is trying to use the data before it is returned!
let returnedData = getDataUnsuccessfully();
// We cannot use the data before we know what it is, so returnedData = undefined
console.log("Here is my data:", returnedData);
// What we need is:
// 1. a way of waiting for the data to be returned BEFORE we try to use it
// 2. BUT also to make sure we are not blocking any later JS code while we wait!
console.log("Important function");
```

---

### Live-Coding Examples:

```JS
// Promises can be really useful here...
// Function: "Hi JS, I *promise* you that if you wait for me to resolve, you will get something you can use"

// A function which successfully uses a Promise to return a result
let error = false
const getDataSuccessfully = () => {
    //                        Function to be called when the Promise is resolved (this passes a result)
    //                            ^
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data returned from server!")
            // The result of the Promise will be the below string, but could be an object, or something else!
              if(!error){
            resolve("Lots of data")
              };
               reject(' we have an error')
        }, 5000)
    })

    // Return the result of the Promise once it has resolved (and not before!)
    return promise;
}

const useDataSuccessfully = () => {
    // Execute the getDataSuccessfully() function
    getDataSuccessfully()
    // THEN, when it is finished, use the data it returns in your JS
    // Note, now we are waiting for the data to be ready, not trying to use it too early!
    .then(data => {
        let returnedData2 = data;
        //                                        "Lots of data"
        //                                              ^
        console.log("Data returned from server:", returnedData2);
    });
}

// Call useDataSuccessfully()
useDataSuccessfully();
// Note that this is not blocked by JS, as the browser is given the setTimeout function to handle, not JS
console.log("Important function");
```

```JS
const blackFriday = false;

function amazonPromise(){
    return new Promise((resolve , reject)=>{
        if(blackFriday === true){
            // rejected
            reject( ' Sorry for not sending your article on time 😐');
        }
        else{
            // fulfilled
            resolve(' this is your product as promised 🙂')
        }

    })
}

const promise = amazonPromise();

promise.then((msg)=>{
    console.log(msg);
});
promise.catch((msg)=>{
    console.log(msg);
});

console.log(promise);
```

---

## Assignments:

**Assignment:** [Browser-fetch-promises](https://classroom.github.com/a/paCIKHff)
**Solution:** [Browser-fetch-promises]()

---

### Resources:

- [JavaScript Promises](https://www.w3schools.com/js/js_promise.asp)