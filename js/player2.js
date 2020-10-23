// Canvas
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const box2 = 25;
const canvasSize2 = 23;

// Score
var score2 = 0;

// Fruits
var fruit2 = {
  x: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2,
  y: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2
}

// Snake
var snake2 = [];
snake2[0] = {
  x: Math.floor((canvasSize2/2)) * box2,
  y: Math.floor((canvasSize2/2)) * box2
}

// Controls
var dir2;

// GameOver
var gameOver2 = false;

//GAME LOOP
function player2(){

  //Draw the background
  ctx2.fillStyle = "#EA8E13";
  ctx2.fillRect(box2, box2, canvasSize2*box2-box2, canvasSize2*box2-box2);

  //Draw Snake
  DrawSnake(snake2, ctx2, box2);

  //Draw Fruit
  DrawFruit(ctx2, fruit2, box2);

  // Change directions
  document.addEventListener('keydown', Direction);
  //ChangeDirection
  let snakeX2 = snake2[0].x;
  let snakeY2 = snake2[0].y;
  switch (dir2) {
    case "LEFT2":
      snakeX2 -= box2;
      break;
    case "RIGHT2":
      snakeX2 += box2;
      break;
    case "UP2":
      snakeY2 -= box2;
      break;
    case "DOWN2":
      snakeY2 += box2;
      break;
    }

  //Limits verifications
  if(snakeX2 > (canvas2.width - box2*2))
    snakeX2 = box2;
  if(snakeY2 > (canvas2.height - box2*2))
    snakeY2 = box2;
  if(snakeX2 < box2)
    snakeX2 = (canvas2.width - box2*2);
  if(snakeY2 < box2)
    snakeY2 = (canvas2.height - box2*2);

  //If the snake eats the fruit
  eatsFruit2();

  //Add new head
  let newHead2 = {
      x : snakeX2,
      y : snakeY2
  }

  //Game Over
  if(checkCollision(newHead2, snake2)){
    clearInterval(game2);
    gameOver2 = true;
    checkScores(gameOver1, gameOver2, score, score2);
  }
  snake2.unshift(newHead2);

  //Score
  drawScore2();

}
let game2 = setInterval(player2, 100);
