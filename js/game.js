if (gameOver1 == true && gameOver2 == true) {
  // Player 1 winner
  if (score > score2) {
    alert("Player 1 wins!");
  }
  else if (score2 > score) {
    alert("Player 2 wins!");
  }
  else if (score == score2) {
    alert("It's a draw!");
  }
}
