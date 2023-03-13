// put all the html elements I need 
let computerNumber = 0;
let playButton = document.getElementById("play-button");
let resetButton = document.querySelector(".button-reset");
let userInput = document.querySelector("#user-input");
let resultAreaImg = document.querySelector(".main-img");
let resultText = document.querySelector(".result-text");
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let chances = 5; // remaining chances
let userValueList = []; // numbers list that user already entered

chanceArea.innerHTML = `your remaining chances:${chances}`;
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput);

function pickRandomNumber() {
  // Pick Random number

  computerNumber = Math.floor(Math.random() * 100) + 1;
  console.log("answer", computerNumber);
}

function play() {
  // guess number
  const userValue = userInput.value;
  if (userValue < 1 || userValue > 100) {
    resultText.textContent = "Please enter a number between 1 and 100.";

    return;
  }

  if (userValueList.includes(userValue)) {
    resultText.textContent = "This number has already been entered. Please enter another number";

    return;
  }

  chances--;
  chanceArea.innerHTML = `Your remaining chances:${chances}`;
  userValueList.push(userValue);
  if (userValue < computerNumber) {
    resultAreaImg.src =
      "img/go-up.JPEG";
    resultText.textContent = "Up!";
  } else if (userValue > computerNumber) {
    resultAreaImg.src = "img/down.JPEG";
    resultText.textContent = "Down!";
  } else {
    resultAreaImg.src = "img/correct.JPEG";
    resultText.textContent = "You got it!";
    chanceArea.textContent = "You are a true Gypsy's friend"
    gameOver = true;
  }

  if (chances == 0) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function focusInput() {
  userInput.value = "";
}

function reset() {
  //RESET
  pickRandomNumber();
  userInput.value = "";
  resultAreaImg.src = "img/mainpic.JPEG";
  resultText.textContent = "New game has started ";
  gameOver = false;
  playButton.disabled = false;
  chances = 5;
  chanceArea.innerHTML = `Your remaing chances:${chances}`;
  userValueList = [];
}

pickRandomNumber();