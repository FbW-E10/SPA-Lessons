import Car from "./components/Car";
import { useState } from "react";
//your first need to import something extra from React (useState)
let carsData = [
  { brand: "BMW", model: "X5", img: "./images/bmw-x5.png" },
  { brand: "Ford", model: "Galaxy", img: "./images/ford-galaxy.jpeg" },
  { brand: "Kia", model: "Sportage", img: "./images/kia-sportage.jpg" },
];

function App() {
  // we declare an array with two items in it:
  let [cars, setCars] = useState(carsData);
  // cars => The first item should be a variable you want your component to "keep track of"
  // setCars ==> e second item should be a function which will let us change the variable to a different value

  const onClear = () => {
    // cars = []; // update our app using traditional variables, it won't change in the browser
    setCars([]);
  };

  const onBringCars = () => {
    setCars(carsData);
  };

  return (
    <div className="App">
      <h1> React Props and State</h1>

      {cars.map((car, index) => {
        return (
          <Car
            key={index}
            model={car.model}
            imageData={car.img}
            brand={car.brand}
          />
        );
      })}

      {/* <Car brand="BMW" model="X5" imageData="./images/bmw-x5.png" />
   <Car brand="Ford" model="Galaxy" imageData="./images/ford-galaxy.jpeg" />
   <Car brand="Kia" model="Sportage" imimageDatag="./images/kia-sportage.jpg" /> */}

      <button onClick={onClear}>Clear</button>
      <button onClick={onBringCars}>Bring the cars</button>
    </div>
  );
}

export default App;
