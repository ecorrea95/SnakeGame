let up = new Audio();
let down = new Audio();
let right = new Audio();
let left = new Audio();
up.src = "sounds/up.mp3";
down.src = "sounds/down.mp3";
right.src = "sounds/right.mp3";
left.src = "sounds/left.mp3";
let eat = new Audio();
let dead = new Audio();
eat.src = "sounds/eat.mp3";
dead.src = "sounds/dead.mp3";

function checkScores() {
  if (gameOver1 == true && gameOver2 == true) {
    console.log("Checking scores");
    // Player 1 wins
    if (score > score2) {
      alert("Player 1 wins!");
    }
    // Player 2 wins
    else if (score2 > score) {
      alert("Player 2 wins!");
    }
    // Draw
    else if (score == score2) {
      alert("It's a draw!");
    }
  }
}
