import { useState } from "react";
import User from "./components/User";

function App() {
  // const [name , setName] = useState("")
  // const [email , setEmail ] = useState("");
  // const [address , setAddress ] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });
  // const nameHandler = (e)=>{
  //   setName(e.target.value)
  // }
  const changeHandler = (e) => {
    //console.log(e.target.value);
    setUser({
      ...user, // all the previous values
      [e.target.name]: e.target.value, // new key : value
    });
  };

  return (
    <div className="App">
      <h1> React Interaction</h1>
      <form>
        <div>
          Name :
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          Email:{" "}
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={changeHandler}
            required
          />
        </div>
        <div>
          Address :
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={changeHandler}
          />
        </div>
      </form>
      <User user={user} />
    </div>
  );
}

export default App;
