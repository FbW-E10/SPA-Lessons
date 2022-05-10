
const post = {
    title: "foo",
    body: "bar",
    username: "John",
    userId: 1,
  };
  
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "lol": "hahahaha"
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response.status, response.ok);
        return response.json();
      }
    })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  