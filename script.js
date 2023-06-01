const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector(".items-nav");
const navbar = document.querySelector(".navbar");

hamburgerButton.addEventListener("click", hamburger);

function hamburger() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
  navbar.classList.toggle("active");
}
