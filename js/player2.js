//GAME LOOP
function draw2(){

  //Draw the background
  ctx2.fillStyle = "#EA8E13";
  ctx2.fillRect(box2, box2, canvasSize2*box2-box2, canvasSize2*box2-box2);

  //Draw Snake
  DrawSnake2();

  //Draw Fruit
  DrawFruit2();

  let snakeX2 = snake2[0].x;
  let snakeY2 = snake2[0].y;

  //ChangeDirection
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
  if(checkCollision2(newHead2, snake2)){
    clearInterval(game2);
    checkScores();
  }
  snake2.unshift(newHead2);

  //Score
  drawScore2();

}
let game2 = setInterval(draw2, 100);
