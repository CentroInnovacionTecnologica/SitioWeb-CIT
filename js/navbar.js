const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-links");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
});
