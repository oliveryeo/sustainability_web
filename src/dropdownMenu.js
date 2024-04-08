// import './styles/main.css';

const runDropdownMenuEvents = () => {
  const dropdownMenu = document.querySelector("#help-dropdown");
  const dropdownTab = document.querySelector(".dropdown-tab");
  const dropdownMenuIcon = document.querySelector("#help-dropdown > img");
  
  dropdownMenu.addEventListener("click", () => {
    // If already visible, remove visibility and return original icon position
    if (dropdownTab.classList.contains("visible")) {
      dropdownTab.classList.remove("visible");
      dropdownMenuIcon.classList.remove("rotate180");
      return;
    }
    
    dropdownTab.classList.add("visible");
    dropdownMenuIcon.classList.add("rotate180");
  })

  window.addEventListener("click", (e) => {
    // If you click out, close the dropdown box
    if (e.target.id != "help-dropdown" && e.target.textContent != "How can I help?" && dropdownTab.classList.contains("visible")) {
      dropdownTab.classList.remove("visible");
      dropdownMenuIcon.classList.remove("rotate180");
      return;
    }
  })
}

export { runDropdownMenuEvents };