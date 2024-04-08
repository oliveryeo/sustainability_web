import './styles/reset.css';
import './styles/main.css';
import sunflowerLogoImg from './assets/flower.svg';
import triangleImg from './assets/triangle-down.svg';
import { runDropdownMenuEvents } from './dropdownMenu';

// Logo for homepage title
const pageLogo = document.querySelector("#page-logo");
pageLogo.src = sunflowerLogoImg;
pageLogo.alt = "flower-icon";

// Logo for dropdown menu
const dropdownMenuIcon = document.querySelector("#help-dropdown > img");
dropdownMenuIcon.src = triangleImg;

// Run dropdown menu events
runDropdownMenuEvents();