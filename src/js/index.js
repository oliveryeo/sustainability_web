import "../styles/main.css";
import sunflowerLogoImg from "../assets/flower.svg";
import triangleImg from "../assets/triangle-down.svg";
import slideImgOne from "../assets/slideshow-image-1.png";
import slideImgTwo from "../assets/slideshow-image-2.png";
import slideImgThree from "../assets/slideshow-image-3.png";
import { runDropdownMenuEvents } from "./dropdownMenu";

// Logo for homepage title - Can probably separate this into a separate navbar javascript file
const pageLogo = document.querySelector("#page-logo");
pageLogo.src = sunflowerLogoImg;
pageLogo.alt = "flower-icon";

// Logo for dropdown menu - Can probably separate this into a separate navbar javascript file
const dropdownMenuIcon = document.querySelector("#help-dropdown > img");
dropdownMenuIcon.src = triangleImg;
dropdownMenuIcon.alt = "dropdown triangle";

// Run dropdown menu events - Can probably separate this into a separate navbar javascript file
runDropdownMenuEvents();

// Images and captions for slide show
const slideImageOne = document.querySelector("#image-slider-1 > img");
slideImageOne.src = slideImgOne;
const captionOne = document.querySelector("#image-slider-1 > figcaption");
captionOne.textContent = "Beach shores becoming a garbage magnet for plastic waste";

const slideImageTwo = document.querySelector("#image-slider-2 > img");
slideImageTwo.src = slideImgTwo;
const captionTwo = document.querySelector("#image-slider-2 > figcaption");
captionTwo.textContent = "Sea turtles mistake plastic waste as jellyfish for food";

const slideImageThree = document.querySelector("#image-slider-3 > img");
slideImageThree.src = slideImgThree;
const captionThree = document.querySelector("#image-slider-3 > figcaption");
captionThree.textContent = "Seal getting trapped by plastic wastes";

// Logic for carousel
let slideIndex = 1;
const allSlides = document.querySelectorAll(".carousel-slide > div");
showSlides();

function showSlides() {
  // Hide all slides
  allSlides.forEach(slide => {
    slide.style.display = "none";
  });

  // Identify the slide to display
  const slideToDisplay = allSlides[slideIndex - 1];
  slideToDisplay.style.display = "block";

  // Add the counter for the next slide
  slideIndex++;

  // Reset slide index if cross slides threshold number
  if (slideIndex > allSlides.length) {
    slideIndex = 1;
  }
  
  // Change slide every 4 seconds
  setTimeout(showSlides, 4000);
  
}


