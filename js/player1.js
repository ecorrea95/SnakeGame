const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const box = 25;
const canvasSize = 23;
let score = 0;
let fruit = {
  x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
  y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
}
let dir;
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
let snake = [];
snake[0] = {
  x: Math.floor((canvasSize/2)) * box,
  y: Math.floor((canvasSize/2)) * box
}

//Draw the snake at the middle of the canvas
function DrawSnake (){
  for (let i=0; i<snake.length; i++){
    ctx.fillStyle = 'green';
    ctx.fillRect (snake[i].x, snake[i].y, box, box);
  }
}

//Draws fruit on a random position
function DrawFruit(){
  ctx.fillStyle = "red";
  ctx.fillRect(fruit.x, fruit.y, box, box);
}

//Change direction
document.addEventListener('keydown', Direction);
function Direction (event){
  if(event.keyCode == 37 && dir != "RIGHT"){
    dir = "LEFT";
    left.play();
  } else if(event.keyCode == 38 && dir != "DOWN"){
    dir = "UP";
    up.play();
  } else if(event.keyCode == 39 && dir != "LEFT"){
    dir = "RIGHT";
    right.play();
  } else if(event.keyCode == 40 && dir != "UP"){
    dir = "DOWN";
    down.play();
  }
}

// Checks for collision
function checkCollision (head, array){
  for (let i=0; i<array.length; i++){
    if (head.x == array[i].x && head.y == array[i].y){
      dead.play();
      return true;
    }
  }
  return false;
}

//If the snake eats the fruit
function eatsFruit(){
  if(snake[0].x == fruit.x && snake[0].y == fruit.y){
    score++;
    eat.play();
    fruit = {
      x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
      y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
    }
    //Dont remove the tail
  } else {
    //Remove the tail
    snake.pop();
  }
}

function drawScore(){
  document.getElementById('score1')
    .innerText = "Player 1: "+score;
}

//Toggle pause
document.addEventListener('keydown', togglePause);
function togglePause (event){
  if(event.keyCode == 32 || event.keyCode == 27){
    alert("GAME PAUSED!");
  }
}

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
