const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("mouseleave", () => {
  const dropdownMenu = dropdown.querySelector(".dropdown-menu");
  dropdownMenu.style.display = "none";
});
