<<<<<<< HEAD
var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: purple"
  );
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: orange"
  );
}

outer.addEventListener("click", changeOrange);
inner.addEventListener("click", changePurple);
=======
var outer = document.querySelector(".outer-div");
var inner = document.querySelector(".inner-div");
var button = document.querySelector(".button");

function changeBlue(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: blue"
  );
}

function changePurple(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: purple"
  );
}

function changeOrange(event) {
  // event.stopPropagation();
  event.currentTarget.setAttribute(
    "style",
    "background-color: orange"
  );
}

outer.addEventListener("click", changeOrange);
inner.addEventListener("click", changePurple);
>>>>>>> 2eea7de7cd53209ef5faf8234bd2aa46e0469e46
button.addEventListener("click", changeBlue);