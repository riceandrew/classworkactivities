var incrementtext = document.querySelector("#increment");

var decrementtext = document.querySelector("#decrement");

var count = document.querySelector("#count");

var countNumber = 0;

incrementtext.addEventListener("click", function() {
    countNumber++;
    count.textContent = countNumber;
});

decrementtext.addEventListener("click", function() {
    countNumber--;
    count.textContent = countNumber;
});