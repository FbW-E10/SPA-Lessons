import React from "react";
import ThemedButton from "./ThemedButton";
import DarkModeToggle from "./DarkModeToggle";
import defaultUser from "../data";

function Header({userProps, themeProps}) {
  
  
  function handleLogin() {
    if (userProps.user) {
      userProps.setUser(null);
    } else {
      userProps.setUser(defaultUser);
    }
  }

  return (
    <header>
      <h1>React Context</h1>
      <nav>
        <ThemedButton onClick={handleLogin}>
          {userProps.user ? "Logout" : "Login"}
        </ThemedButton>
        <DarkModeToggle themeProps={themeProps} />
      </nav>
    </header>
  );
}

export default Header;
