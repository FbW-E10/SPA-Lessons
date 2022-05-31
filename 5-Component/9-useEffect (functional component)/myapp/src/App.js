import "./App.css";
import React, { useState } from "react";
import Users from "./compnents/Users";

function App() {
  const [language, setLanguage] = useState('english');

  return <div>
 {console.log(language)}
<button onClick={()=>setLanguage('french')}>change lang</button>
  <Users language={language} />
  </div>;
}

export default App;
