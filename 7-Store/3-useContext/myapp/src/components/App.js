import React, { useState } from "react";

import Header from "./Header";
import Profile from "./Profile";

function App() {
  const [theme, setTheme] = useState("dark");
  const [user, setUser] = useState(null);


  return (
    <main className={theme}>
      
        <Header userProps={{user, setUser}} themeProps={{theme, setTheme}} />
        <Profile userProps={{user, setUser}} themeProps={{theme, setTheme}}/>
      
    </main>
  );
}

export default App;
