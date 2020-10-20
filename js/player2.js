const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const box2 = 25;
const canvasSize2 = 23;
let score2 = 0;
let fruit2 = {
  x: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2,
  y: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2
}
let dir2;
let up2 = new Audio();
let down2 = new Audio();
let right2 = new Audio();
let left2 = new Audio();
up2.src = "sounds/up.mp3";
down2.src = "sounds/down.mp3";
right2.src = "sounds/right.mp3";
left2.src = "sounds/left.mp3";
let eat2 = new Audio();
let dead2 = new Audio();
eat2.src = "sounds/eat.mp3";
dead2.src = "sounds/dead.mp3";
let snake2 = [];
snake2[0] = {
  x: Math.floor((canvasSize2/2)) * box2,
  y: Math.floor((canvasSize2/2)) * box2
}

//Draw the snake at the middle of the canvas
function DrawSnake2 (){
  for (let i=0; i<snake2.length; i++){
    ctx2.fillStyle = 'green';
    ctx2.fillRect (snake2[i].x, snake2[i].y, box2, box2);
  }
}

//Draws fruit on a random position
function DrawFruit2(){
  ctx2.fillStyle = "red";
  ctx2.fillRect(fruit2.x, fruit2.y, box2, box2);
}

//Change direction
document.addEventListener('keydown', Direction2);
function Direction2 (event){
  if(event.keyCode == 37 && dir != "RIGHT"){
    dir2 = "LEFT";
    left2.play();
  } else if(event.keyCode == 38 && dir != "DOWN"){
    dir2 = "UP";
    up2.play();
  } else if(event.keyCode == 39 && dir != "LEFT"){
    dir2 = "RIGHT";
    right2.play();
  } else if(event.keyCode == 40 && dir != "UP"){
    dir2 = "DOWN";
    down2.play();
  }
}

// Checks for collision
function checkCollision2 (head2, array2){
  for (let i=0; i<array2.length; i++){
    if (head2.x == array2[i].x && head2.y == array2[i].y){
      dead2.play();
      return true;
    }
  }
  return false;
}

//If the snake eats the fruit
function eatsFruit2(){
  if(snake2[0].x == fruit2.x && snake2[0].y == fruit2.y){
    score2++;
    eat2.play();
    fruit2 = {
      x: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2,
      y: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2
    }
    //Dont remove the tail
  } else {
    //Remove the tail
    snake2.pop();
  }
}

function drawScore2(){
  document.getElementById('score2')
    .innerText = "Player 2: "+score2;
}

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
    dead2.play();
    alert("Game Over! Your score: "+score2);
  }
  snake2.unshift(newHead2);

  //Score
  drawScore2();

}
let game2 = setInterval(draw2, 100);
