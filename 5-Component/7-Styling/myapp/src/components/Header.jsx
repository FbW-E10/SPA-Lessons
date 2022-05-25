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

      <FontAwesomeIcon icon="fa-solid fa-motorcycle" />
      <FontAwesomeIcon icon="fa-solid fa-address-book" />

      <div onClick={handleColorToggle}> Theme</div>
      <Nav username={"John"} />

      {displayMenu && <DropDown myToggle={colorToggle} />}
    </div>
  );
}
