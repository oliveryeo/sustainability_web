// import './styles/main.css';

const runDropdownMenuEvents = () => {
  const dropdownMenu = document.querySelector("#help-dropdown");
  dropdownMenu.addEventListener("click", () => {
    const dropdownTab = document.querySelector(".dropdown-tab");
    const dropdownMenuIcon = document.querySelector("#help-dropdown > img");

    // If already visible, remove visibility and return original icon position
    if (dropdownTab.classList.contains("visible")) {
      dropdownTab.classList.remove("visible");
      dropdownMenuIcon.classList.remove("rotate180");
      return;
    }
    
    dropdownTab.classList.add("visible");
    dropdownMenuIcon.classList.add("rotate180");
  })
}

export { runDropdownMenuEvents };