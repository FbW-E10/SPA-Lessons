const blackFriday = false;

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

async function amazon() {
  try {
    const result = await amazonPromise();
    console.log(result);
  } catch (error) {
    alert(error);
  }
}
amazon();

// With .then().catch()
/*function amazon() {
  const promise = amazonPromise();

  promise.then((result) => {
    console.log(result);
  });
  promise.catch((error) => {
    alert(error);
  });
}
amazon();*/
