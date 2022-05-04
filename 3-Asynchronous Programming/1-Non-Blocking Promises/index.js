// non-blocking code
// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
// 1s = 1000ms
// 1000*5 => 5000
//setTimeout(() => console.log("Data returned from server!"), 1000);

/*const getDataUnsuccessfully = () => {
  let data;
  setTimeout(() => {
    data = "Lots of data";
    return data;
  }, 5000);
};*/

// Because the "data request" takes 5 secs, JS is trying to use the data before it is returned!
//let returnedData = getDataUnsuccessfully();

// We cannot use the data before we know what it is, so returnedData = undefined
//console.log("Here is my data:", returnedData);
// What we need is:
// 1. a way of waiting for the data to be returned BEFORE we try to use it
// 2. BUT also to make sure we are not blocking any later JS code while we wait!
//-----------------------------------------------------------------------//

// Promises can be really useful here...
// Function: "Hi JS, I *promise* you that if you wait for me to resolve, you will get something you can use"

// A function which successfully uses a Promise to return a result

let error = true;
const getDataUnsuccessfully = () => {
  let output = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!error) {
        resolve("Lots of data Success");
      }
      reject("ERROR: We have an error");
    }, 2000);
  });

  return output;
};

const promise = getDataUnsuccessfully();
//console.log(promise);

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
