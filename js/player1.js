// Canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const box = 25;
const canvasSize = 23;

// Score
var score = 0;

// Fruits
var fruit = {
  x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
  y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
}

// Snake
var snake = [];
snake[0] = {
  x: Math.floor((canvasSize/2)) * box,
  y: Math.floor((canvasSize/2)) * box
}

// Controls
var dir;

// GameOver
var gameOver1 = false;

//GAME LOOP
function player1(){

  //Draw the background
  ctx.fillStyle = "#EA8E13";
  ctx.fillRect(box, box, canvasSize*box-box, canvasSize*box-box);

  //Draw Snake
  DrawSnake(snake, ctx, box);

  //Draw Fruit
  DrawFruit(ctx, fruit, box);

  // Change directions
  document.addEventListener('keydown', Direction);
  //ChangeDirection
  let snakeX = snake[0].x;
  let snakeY = snake[0].y;
  switch (dir) {
    case "LEFT1":
      snakeX -= box;
      break;
    case "RIGHT1":
      snakeX += box;
      break;
    case "UP1":
      snakeY -= box;
      break;
    case "DOWN1":
      snakeY += box;
      break;
    }

  //Limits verifications
  if(snakeX > (canvas.width - box*2))
    snakeX = box;
  if(snakeY > (canvas.height - box*2))
    snakeY = box;
  if(snakeX < box)
    snakeX = (canvas.width - box*2);
  if(snakeY < box)
    snakeY = (canvas.height - box*2);

  //If the snake eats the fruit
  eatsFruit();

  //Add new head
  let newHead = {
      x : snakeX,
      y : snakeY
  }

  // Game Over
  if(checkCollision(newHead, snake)){
    clearInterval(game);
    gameOver1 = true;
    checkScores(gameOver1, gameOver2, score, score2);
  }
  snake.unshift(newHead);

  //Score
  drawScore();

}
let game = setInterval(player1, 100);
