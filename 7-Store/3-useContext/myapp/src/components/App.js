import React, { useContext } from "react";
import {ThemeContext} from '../context/theme';
import Header from "./Header";
import Profile from "./Profile";

function App() {

 const { theme }= useContext(ThemeContext)

  return (
    <main className={theme}>
      
        <Header />
        <Profile />
      
    </main>
  );
}

export default App;
