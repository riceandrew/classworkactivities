<<<<<<< HEAD
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");
var splitEl = document.querySelector("#split");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip() {
  event.preventDefault();
  var tipPercentage = tipEl.value;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal;
}

function splitTotal() {
  event.preventDefault();

  var total = document.querySelector("#new-total").textContent;
  var numPeople = document.querySelector("#num-people").value;
  
  var newTotal = (total / numPeople).toFixed(2);
  document.querySelector("#split-total").textContent = newTotal;
}

submitEl.addEventListener("click", addTip);
splitEl.addEventListener("click", splitTotal);
=======
var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");
var splitEl = document.querySelector("#split");

function calculateTip(total, tipPercentage) {
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip() {
  event.preventDefault();
  var tipPercentage = tipEl.value;
  var total = totalEl.value;
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal;
}

function splitTotal() {
  event.preventDefault();

  var total = document.querySelector("#new-total").textContent;
  var numPeople = document.querySelector("#num-people").value;
  
  var newTotal = (total / numPeople).toFixed(2);
  document.querySelector("#split-total").textContent = newTotal;
}

submitEl.addEventListener("click", addTip);
splitEl.addEventListener("click", splitTotal);
>>>>>>> 2eea7de7cd53209ef5faf8234bd2aa46e0469e46
