import '../styles/reset.css';
import '../styles/index.css';
import sunflowerLogoImg from '../assets/flower.svg';
import triangleImg from '../assets/triangle-down.svg';
import { runDropdownMenuEvents } from './dropdownMenu';

// Logo for homepage title
const pageLogo = document.querySelector("#page-logo");
pageLogo.src = sunflowerLogoImg;
pageLogo.alt = "flower-icon";

// Logo for dropdown menu
const dropdownMenuIcon = document.querySelector("#help-dropdown > img");
dropdownMenuIcon.src = triangleImg;
dropdownMenuIcon.alt = "dropdown triangle";

// Images for slide show
const slideImageOne = document.getElementById("image-slider-1");
const slideImageTwo = document.getElementById("image-slider-2");
const slideImageThree = document.getElementById("image-slider-3");
const slideImageFour = document.getElementById("image-slider-4");

// Run dropdown menu events
runDropdownMenuEvents();