<<<<<<< HEAD
var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
=======
var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
>>>>>>> 2eea7de7cd53209ef5faf8234bd2aa46e0469e46
});