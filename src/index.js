import './styles.css';
import SunflowerLogo from './assets/flower.svg';

// <img src="./assets/flower.svg" alt="flower-icon">

// Logo for homepage title
const logoTitleBtn = document.querySelector(".logo-title-btn");
const logoTitle = document.querySelector(".logo-title-btn > div");
const sunflowerLogo = new Image();
sunflowerLogo.src = SunflowerLogo;
sunflowerLogo.alt = "flower-icon";
logoTitleBtn.insertBefore(sunflowerLogo, logoTitle);

console.log(logoTitleBtn);