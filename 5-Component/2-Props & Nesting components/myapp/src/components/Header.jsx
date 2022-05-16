import React from "react";
import DropDown from "./DropDown.js";
import Nav from "./Nav";

let x = true;

let colorToggle = false;

export default function Header() {
  return (
 
      <div
        className={colorToggle ? "dark" : "light"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          height: "70px",
        }}
      >
        <img src="https://source.unsplash.com/random/50x50" alt="logo" />

        <Nav username={"John"}/>

        {x && <DropDown  myToggle={colorToggle} />}
      </div>
    
  );
}
