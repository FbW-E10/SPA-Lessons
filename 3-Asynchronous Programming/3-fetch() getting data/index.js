const el = document.querySelector("#btn");

// async function sum(a, b) {
//   return a + b;
// }

// console.log(sum(2, 3));

// let multi = async (a, b) => {
//   return a * b;
// };

// console.log(multi(2, 3));

// const xyz = fetch("https://restcountries.com/v2/all");
// console.log(xyz);

let img = document.querySelector("#img");
let countryName = document.querySelector("#countryName");
let area = document.querySelector("#area");
let population = document.querySelector("#population");


// the search function================================================
const handleClick = () => {
  let userInput = document.querySelector("#country").value;

  fetch(`https://restcountries.com/v2/name/${userInput}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let country = data[0];

      img.src = country.flag;
      img.width = 200;
      countryName.textContent = country.name;
      area.textContent = "Area: " + country.area;
      population.textContent = "Population: " + country.population;
    })
    .catch((err) => console.log(err));
};
//===========================================
el.addEventListener("click", handleClick);
//=============================================

// the async way of writing fetch======================
const myFunc = async () => {
  try {
    const response = await fetch(`https://restcountries.com/v2/name/peru`);
    const data = await response.json();
    console.log(data);


  } catch (err) {
    console.log(err);
  }
};
//===================
myFunc();
//=====================