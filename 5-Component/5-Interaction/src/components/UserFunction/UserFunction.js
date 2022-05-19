import { useState } from "react";
import Form from "./Form";
import UserData from "./UserData";

function UserFunction() {
  // const [name , setName] = useState("")
  // const [email , setEmail ] = useState("");
  // const [address , setAddress ] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const changeHandler = (e) => {
    console.log(e.target.name);

    setUser({
      ...user, //copy all the previous values
      [e.target.name]: e.target.value, // new key : value
    });
  };

  console.log(user);

  return (
    <section className="border">
      <h2> User with Function component</h2>
      <Form changeHandler={changeHandler} />
      <UserData user={user} />
    </section>
  );
}

export default UserFunction;

/**
 Zhuo: how to pass another parameter(not event) to the event handler function, if we give that function a name and declare it somewhere outside the JSX?

    onChange={(e) => changeHandler(e, moreDate)}
 */
