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

const promise_1 = amazonPromise();

//console.log(promise_1);

promise_1
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
