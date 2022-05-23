import "./App.css";
import AddProduct from "./components/AddProduct";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Signup />
      <hr/>
      <AddProduct />
    </div>
  );
}

export default App;
