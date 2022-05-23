import React, { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    alert("Hi " + user.username + ", your account is now ready!");
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));

    console.log(user);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>username:</div>
        <input type={"text"} name="username" onChange={handleChange} />
        <div>email:</div>
        <input type={"email"} name="email" onChange={handleChange} />
        <div>password:</div>
        <input type={"password"} name="password" onChange={handleChange} />
        <br />
        <button>Done</button>
      </form>
    </div>
  );
}
