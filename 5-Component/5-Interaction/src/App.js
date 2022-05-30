import React from "react";
import UserClass from "./components/UserClass/UserClass";
import UserFunction from "./components/UserFunction/UserFunction";
import "./index.css";

function App() {
  return (
    <div className="App">
      <h1> React Interaction</h1>
      <UserFunction />
      <UserClass />
    </div>
  );
}

export default App;
