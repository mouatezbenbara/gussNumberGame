"use strict";
let realNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let highScores = [];
let trouve = false;
document.querySelector(".btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".inpt").value);
  const reGuess = function (msg) {
    document.querySelector(".message").textContent = msg;
    score--;
    document.querySelector(".score").textContent = score;
  };
  // here we test if the user found the number or not yet
  if (!trouve) {
    // we Test if the user enter Data and if its valid we go inside the if statement
    if (guess && guess > 0 && guess < 21) {
      // the user entered a valid number here the game start we test the number he entered with random one
      // the case that he found it
      // if the score was 0 that means you Lose the game
      if (score === 0) {
        document.querySelector(".message").textContent = "Game Over !";
      } else {
        if (realNumber == guess) {
          // When the player Wins
          document.querySelector(".message").textContent = "🥳 Correct Number";
          // to exit the game
          trouve = true;
          // To show the number in the middle container
          document.querySelector(".number").textContent = guess;
          // background color changed to green
          document.body.style.backgroundColor = "rgb(56, 181, 37)";
          document.querySelector(".number").style.width = "100px";
          if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
          }
          document.querySelector(".score").textContent = score;
        } else if (realNumber > guess) {
          // Guess is too low
          reGuess("↙️ TOO LOW !");
        } else {
          // Guess is too high
          reGuess("↗️ TOO HIGH ! ");
        }
      }
    }
    // Cases For not entering a valid number
    else if (!guess) {
      document.querySelector(".message").textContent = "🛑 No Number";
    } else {
      document.querySelector(".message").textContent =
        "🔻Renter a valid Number ";
    }
  }
});

// again function when we click
document.querySelector(".again").addEventListener("click", function () {
  realNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  trouve = false;
  document.body.style.backgroundColor = "#333";
  document.querySelector(".inpt").value = " ";
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = 20;
});
