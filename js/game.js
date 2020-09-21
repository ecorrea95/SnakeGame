const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const box = 25;
const canvasSize = 23;
let score = 0;

//Game Loop
function draw(){

  //Draw the background
  ctx.fillStyle = "#EA8E13";
  ctx.fillRect(box, box, canvasSize*box-box, canvasSize*box-box);

  //Draw Snake
  DrawSnake();

  //Draw Fruit
  DrawFruit();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  //ChangeDirection
  switch (dir) {
    case "LEFT":
      snakeX -= box;
      break;
    case "RIGHT":
      snakeX += box;
      break;
    case "UP":
      snakeY -= box;
      break;
    case "DOWN":
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

  //Game Over
  if(checkCollision(newHead, snake)){
    clearInterval(game);
    dead.play();
    alert("Game Over! Your score: "+score);
  }
  snake.unshift(newHead);

  //Score
  drawScore();

}
let game = setInterval(draw, 100);
