<<<<<<< HEAD
var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
=======
var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
>>>>>>> 2eea7de7cd53209ef5faf8234bd2aa46e0469e46
}