import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// root element
let rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

const namesInHTML = [
  <li className="test-class">Bob Dust</li>,
  <li>Fredy Mercury</li>,
  <li>Shazam Nikola</li>,
  <li>Wilibin Walabam</li>,
];

const content = <ul>{namesInHTML}</ul>;

// {namesInHTML} ==> `${var}`
root.render(content);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
