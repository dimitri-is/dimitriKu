function toggleMenu() {
  var menu = document.querySelector("header nav");
  menu.classList.toggle("show");
}

document.querySelector(".menu-button").addEventListener("click", toggleMenu);
