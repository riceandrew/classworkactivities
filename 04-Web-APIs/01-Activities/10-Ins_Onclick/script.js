<<<<<<< HEAD
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
=======
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

themeSwitcher.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
>>>>>>> 2eea7de7cd53209ef5faf8234bd2aa46e0469e46
});