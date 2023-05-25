const hamburgerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

hamburgerButton.addEventListener("click", hamburger);

function hamburger() {
  hamburgerButton.classList.toggle("active");
  navigation.classList.toggle("active");
}
