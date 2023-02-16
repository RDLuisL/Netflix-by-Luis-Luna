/* eslint-disable */
import "bootstrap";
import "./style.css";

const carouselItems = document.querySelector(".carousel-items");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let itemIndex = 0;
const itemCount = carouselItems.children.length;

prevButton.addEventListener("click", () => {
  if (itemIndex > 0) {
    itemIndex--;
    carouselItems.style.transform = `translateX(-${itemIndex * 25}%)`;
  }
});

nextButton.addEventListener("click", () => {
  if (itemIndex < itemCount - 1) {
    itemIndex++;
    carouselItems.style.transform = `translateX(-${itemIndex * 25}%)`;
  }
});

// Modulo para hacer el carrusel automatico

// setInterval(() => {
//   if (itemIndex < itemCount - 1) {
//     itemIndex++;
//     carouselItems.style.transform = `translateX(-${itemIndex * 25}%)`;
//   } else {
//     itemIndex = 0;
//     carouselItems.style.transform = "translateX(0)";
//   }
// }, 5000);
