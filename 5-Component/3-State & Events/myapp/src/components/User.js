import React, { useState } from "react";

const users=[
    { username: "John", email: "qqqqqq", city: "wwwwwwwww" },
    { username: "rrrrr", email: "zzzzz", city: "oooooo" },
    { username: "ddddddd", email: "ffffff", city: "hhhhh" },
  ]

export default function User() {
  const [user, setUser] = useState(users[0]);


 const handleNext= ()=>{

     let i = users.indexOf(user)

     if (i === users.length - 1) {
        setUser(users[0]);
        } else {
        setUser(users[i + 1]);
        } 
     
 }

  return (
    <div>
    <div onClick={handleNext}>Next</div>
        <div>
          <h2> {user.username} </h2>
          <h3> {user.email} </h3>
          <h4> {user.city} </h4>
          <hr/>
        </div>
     
    </div>
  );
}
