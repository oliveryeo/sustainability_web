const runDropdownMenuEvents = () => {
  const dropdownMenu = document.querySelector("#help-dropdown");
  const dropdownTab = document.querySelector(".dropdown-tab");
  const dropdownMenuIcon = document.querySelector("#help-dropdown > img");
  
  dropdownMenu.addEventListener("click", () => {
    dropdownTab.classList.toggle("visible");
    dropdownMenuIcon.classList.toggle("rotate180");
  })

  window.addEventListener("click", (e) => {
    // If you click out, close the dropdown box if what you have clicked is NOTHING within the dropdown element
    if (e.target.id != "help-dropdown" && e.target.alt != "dropdown triangle" && e.target.textContent != "How can I help?" && dropdownTab.classList.contains("visible")) {
      dropdownTab.classList.remove("visible");
      dropdownMenuIcon.classList.remove("rotate180");
      return;
    }
  })
}

export { runDropdownMenuEvents };