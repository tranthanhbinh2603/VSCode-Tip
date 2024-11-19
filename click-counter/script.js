let counter = document.getElementById("counter");
let button = document.getElementById("click-button");

let numOfClicks = 0;

button.addEventListener("click", () => {
  if (counter.textContent == "100") {
    numOfClicks = 0;
  } else {
    numOfClicks += 1;
  }
  counter.textContent = numOfClicks;
});