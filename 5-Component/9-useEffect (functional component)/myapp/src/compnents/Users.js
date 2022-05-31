import React, { useState, useEffect } from "react";

export default function Users(props) {
  const [user, setUser] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
      let mounted=true;

    fetch(`https://jsonplaceholder.typicode.com/users/${userInput}`)
      .then((response) => response.json())
      .then((data) => {
          if(mounted){
        setUser(data);
    }
        console.log("from res");

      });
     // clear function
      return ()=>{
           mounted=false
      }

  },[userInput, props.language]);



  return (
    <div>
      <input type={"text"} onChange={(e) => setUserInput(e.target.value)} />
      
      {console.log(props.language, userInput)}
      <h1> {user.username} </h1> <h3> {user.name} </h3> <p> {user.email} </p>
      <p> {user.phone} </p> <hr />
    </div>
  );
}
