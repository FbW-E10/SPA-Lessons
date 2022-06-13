import React from "react";

function DarkModeToggle({themeProps}) {
 
 
  function handleToggleTheme(e) {
    themeProps.setTheme(e.target.checked ? "dark" : "light");
  }
  return (
    <label>
      Dark Mode
      <input
        type="checkbox"
        checked={themeProps.theme === "dark"}
        onChange={handleToggleTheme}
      />
    </label>
  );
}

export default DarkModeToggle;
