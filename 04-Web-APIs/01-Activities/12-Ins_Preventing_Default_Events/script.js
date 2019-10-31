<<<<<<< HEAD
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
=======
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionResponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(event) {
  event.preventDefault();

  console.log(event);
  
  var response = "Thank you for your submission " + nameInput.value + "! We will reach out to you at " + emailInput.value + ".";
  submissionResponseEl.textContent = response;
>>>>>>> 2eea7de7cd53209ef5faf8234bd2aa46e0469e46
});