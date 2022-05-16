import Car from "./components/Car";
import { useState } from "react";
let carsData = [
  { brand: "BMW", model: "X5", img: "./images/bmw-x5.png" },
  { brand: "Ford", model: "Galaxy", img: "./images/ford-galaxy.jpeg" },
  { brand: "Kia", model: "Sportage", img: "./images/kia-sportage.jpg" },
];

function App() {
  const [cars, setCars] = useState(carsData);

  const onClear = () => {
    console.log("Clear cars!");
    //cars = [];
    setCars([]);
  };

  return (
    <div className="App">
      <h1> React Props and State</h1>
      {cars.map((element, index) => (
        <Car
          key={index}
          brand={element.brand}
          model={element.model}
          img={element.img}
        />
      ))}

      {/* <Car brand="BMW" model="X5" img="./images/bmw-x5.png" />
   <Car brand="Ford" model="Galaxy" img="./images/ford-galaxy.jpeg" />
   <Car brand="Kia" model="Sportage" img="./images/kia-sportage.jpg" /> */}
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default App;
