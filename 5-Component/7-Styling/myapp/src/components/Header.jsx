import React, { useState } from "react";
import DropDown from "./DropDown.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar} from 'reactstrap'

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
    <Navbar 
      // className={colorToggle ? "dark" : "light"}
      // style={{
      //   display: "flex",
      //   justifyContent: "space-between",
      //   alignItems: "center",
      //   position: "relative",
      //   height: "70px",
      // }}

      color={colorToggle ? "light" : "dark"}
      style={{color: colorToggle ? '#000' :'#fff'}}
    >
    test
      <div onClick={handleToggleMenu}> menu {displayMenu ? "🔺" : "🔻"} </div>

      <div onClick={handleColorToggle}> Theme {colorToggle ? <FontAwesomeIcon icon="fa-solid fa-sun" /> : <FontAwesomeIcon icon="fa-solid fa-moon" />}  </div>
      <Nav/>

      {displayMenu && <DropDown myToggle={colorToggle} />}
    </Navbar>
  );
}
