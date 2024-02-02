// Elements
const screen = document.getElementById("screen");
const screenText = document.getElementById("screen-text");
const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", (event) => {
  if (isScreenOn) {
    screen.style.backgroundColor = colorWhite;
    homeButton.style.borderColor = colorBlue;
    screenText.style.visibility = "visible";
  } else {
    screen.style.backgroundColor = colorBlack;
    homeButton.style.borderColor = colorGreyer;
    screenText.style.visibility = "hidden";
  }

  isScreenOn = !isScreenOn;
});

// State
let isScreenOn = false;

// Colors
const colorBlue = "#00ffff";
const colorGrey = "#e4e4e4";
const colorGreyer = "#aaaaaa";
const colorBlack = "#000000";
const colorWhite = "#ffffff";
