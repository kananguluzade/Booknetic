const toggleSearch = document.querySelector(".icon-search");
const searchBar = document.getElementById("searchBar");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

toggleSearch.addEventListener("click", () => {
  searchBar.classList.toggle("toggle-display");
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show-display");
  hamburger.classList.toggle("hamburger-lines-active");
});
