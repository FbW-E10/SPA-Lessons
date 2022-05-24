import React, { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    food: { pizza: false, hamburger: false, salad: false, falafel: false },
    subscription: "No",
  });

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      return setUser((prev) => ({
        ...prev,
        food: { ...prev.food, [e.target.name]: e.target.checked },
      }));
    }

    if (e.target.type === "radio") {
      return setUser((prev) => ({ ...prev, subscription: e.target.value }));
    }

    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.subscription === "No"){
           return alert(
                "Hi " +
                  data.username +
                  ", your ID is " +
                  data.id
              );
        }

          alert(
            "Hi " +
              data.username +
              ", thank you for your subscription, your ID is " +
              data.id
          );
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>username: </div>
        <input type="text" name="username" onChange={handleChange} />
        <div>email: </div>
        <input type="email" name="email" onChange={handleChange} />
        <div>password: </div>
        <input type="password" name="password" onChange={handleChange} />
        <hr />
        <div>choose favorite food: </div>
        <input type={"checkbox"} name="pizza" onChange={handleChange} />{" "}
        <label>Pizza</label>
        <br />
        <input
          type={"checkbox"}
          name="hamburger"
          onChange={handleChange}
        />{" "}
        <label>Hamburger</label>
        <br />
        <input type={"checkbox"} name="salad" onChange={handleChange} />{" "}
        <label>Salad</label>
        <br />
        <input type={"checkbox"} name="falafel" onChange={handleChange} />{" "}
        <label>Falafel</label>
        <hr />
        <div>subscription:</div>
        <input
          type={"radio"}
          name="subscription"
          value={"1 month"}
          onChange={handleChange}
        />{" "}
        <label>1 month</label>
        <br />
        <input
          type={"radio"}
          name="subscription"
          value={"6 months"}
          onChange={handleChange}
        />{" "}
        <label>6 months</label>
        <br />
        <input
          type={"radio"}
          name="subscription"
          value={"1 year"}
          onChange={handleChange}
        />{" "}
        <label>1 year</label>
        <br />
        <input
          type={"radio"}
          defaultChecked
          name="subscription"
          value={"No"}
          onChange={handleChange}
        />{" "}
        <label>No subscription</label>
        <br />
        <button>sign up</button>
      </form>
    </div>
  );
}
