//GAME LOOP
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
    checkScores();
  }
  snake.unshift(newHead);

  //Score
  drawScore();

}
let game = setInterval(draw, 100);
