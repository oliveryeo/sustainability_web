import "../styles/main.css";
import sunflowerLogoImg from "../assets/flower.svg";
import triangleImg from "../assets/triangle-down.svg";
import slideImgOne from "../assets/slideshow-image-1.png";
import slideImgTwo from "../assets/slideshow-image-2.png";
import slideImgThree from "../assets/slideshow-image-3.png";
import slideArrowLeftImg from "../assets/slideshow-left-arrow.svg";
import slideArrowRightImg from "../assets/slideshow-right-arrow.svg";
import { runDropdownMenuEvents } from "./dropdownMenu";

/* 
  *****************LOGIC FOR PAGE INITIATION*****************
*/
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
slideImageOne.alt = "Beach shores becoming a garbage magnet for plastic waste";
const captionOne = document.querySelector("#image-slider-1 > figcaption");
captionOne.textContent =
  "Beach shores becoming a garbage magnet for plastic waste";

const slideImageTwo = document.querySelector("#image-slider-2 > img");
slideImageTwo.src = slideImgTwo;
slideImageTwo.alt = "Sea turtles mistake plastic waste as jellyfish for food";
const captionTwo = document.querySelector("#image-slider-2 > figcaption");
captionTwo.textContent =
  "Sea turtles mistake plastic waste as jellyfish for food";

const slideImageThree = document.querySelector("#image-slider-3 > img");
slideImageThree.src = slideImgThree;
slideImageThree.alt = "Seal getting trapped by plastic wastes";
const captionThree = document.querySelector("#image-slider-3 > figcaption");
captionThree.textContent = "Seal getting trapped by plastic wastes";

// Images for slide arrows
const slideArrowLeft = document.querySelector(".carousel-left-arrow");
slideArrowLeft.src = slideArrowLeftImg;
slideArrowLeft.alt = "Left Arrow for slide change";

const slideArrowRight = document.querySelector(".carousel-right-arrow");
slideArrowRight.src = slideArrowRightImg;
slideArrowRight.alt = "Right Arrow for slide change";

/*
  *****************LOGIC FOR CAROUSEL SLIDES*****************
*/
let slideIndex = 1;
const allSlides = document.querySelectorAll(".carousel-slide > div");
const allIndicators = document.querySelectorAll(
  ".carousel-slide-indicator > span"
);
const slideArrows = document.querySelectorAll("#carousel > img");

// Show slides once
showSlides();

// Change slide every 4 seconds
let slideTimer = setInterval(changeSlides, 4000);

// Add event listener for each indicator
allIndicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    // Retrieve the slide number and set it as the slideIndex
    let slideNumber = indicator.dataset.value;
    slideIndex = slideNumber;

    // Show the slides
    showSlides();

    // Reset timer
    clearInterval(slideTimer);
    slideTimer = setInterval(changeSlides, 4000);
  });
});

// Add event listener for the slide arrows
slideArrows.forEach((arrow) => {
  arrow.addEventListener("click", () => {
    let slideCommand = arrow.dataset.value;

    // Go back one slide
    if (slideCommand == "left") {
      slideIndex--;
      console.log(slideIndex);
      
      // If slideIndex reaches bottom threshold, set the index to the highest slide number
      if (slideIndex < 1) {
        slideIndex = allSlides.length;
      }
      
      // Show the slides and reset the timer
      showSlides();
      clearInterval(slideTimer);
      slideTimer = setInterval(changeSlides, 4000);
    }

    // Go forward one slide
    if (slideCommand == "right") {
      slideIndex++;
      
      // If slideIndex reaches top threshold, set the index to the lowest slide number
      if (slideIndex > allSlides.length) {
        slideIndex = 1;
      }
      
      // Show the slides and reset the timer
      showSlides();
      clearInterval(slideTimer);
      slideTimer = setInterval(changeSlides, 4000);
    }
  })
})

function showSlides() {
  // Hide all slides
  allSlides.forEach((slide) => {
    slide.style.display = "none";
  });

  // Reset all indicators from being selected
  allIndicators.forEach((indicator) => {
    indicator.style.backgroundColor = "";
  });

  // Identify the slide to display
  const slideToDisplay = allSlides[slideIndex - 1];
  slideToDisplay.style.display = "block";

  // Identify the indicator to select
  const selectedIndicator = allIndicators[slideIndex - 1];
  selectedIndicator.style.backgroundColor = "darkgray";
}

function changeSlides() {
  // Add the counter for the next slide
  slideIndex++;

  // Reset slide index if cross slides threshold number
  if (slideIndex > allSlides.length) {
    slideIndex = 1;
  }

  // Show the slide
  showSlides();
}