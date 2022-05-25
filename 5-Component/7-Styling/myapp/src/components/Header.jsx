import React, { useState } from "react";
import DropDown from "./DropDown.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Nav from "./Nav";



export default function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [colorToggle, setColorToggle] = useState(false);

  const handleToggleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const handleColorToggle = () => {
    setColorToggle(!colorToggle);
  };

  return (
    <div
      className={colorToggle ? "dark" : "light"}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        height: "70px",
      }}
    >
      <div onClick={handleToggleMenu}> menu {displayMenu ? "🔺" : "🔻"} </div>

      <div onClick={handleColorToggle}> Theme <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" /> </div>
      <Nav/>

      {displayMenu && <DropDown myToggle={colorToggle} />}
    </div>
  );
}
