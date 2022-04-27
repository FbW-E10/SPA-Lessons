/* Carousel 

1- Create a carousel of up to 6 images.

2- Add arrows for navigation.

3- Write a function that handles each of the navigation behaviors.

4- Optional: Style to your pleasing.
*/

const images = document.querySelectorAll("img");
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

console.log(images);
let currentIndex = 0;

function onRightArrow() {
  currentIndex++;
  if (currentIndex === images.length) {
    currentIndex = 0;
  }
  //console.log("currentIndex ==> ", currentIndex);
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translate(${currentIndex * -50}vw, 0)`;
  }
}
rightArrow.addEventListener("click", onRightArrow);

// Solution!
function onLeftArrow() {
  currentIndex--;
  console.log(currentIndex);
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  //console.log("currentIndex ==> ", currentIndex);
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = `translate(${currentIndex * -50}vw, 0)`;
  }
}
leftArrow.addEventListener("click", onLeftArrow);
