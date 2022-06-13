import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import { ThemeProvider } from "./context/theme";
import "./index.css";

// ReactDOM.render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);