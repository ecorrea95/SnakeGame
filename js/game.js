// Canvas
const canvas = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const ctx = canvas.getContext('2d');
const ctx2 = canvas2.getContext('2d');
const box = 25, box2 = 25;
const canvasSize = 23, canvasSize2 = 23;

// Scores
var score = 0, score2 = 0;

// Fruits
var fruit = {
  x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
  y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
}
var fruit2 = {
  x: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2,
  y: Math.floor(1 + (Math.random() * (canvasSize2 - 1))) * box2
}

// Snake
var snake = [];
snake[0] = {
  x: Math.floor((canvasSize/2)) * box,
  y: Math.floor((canvasSize/2)) * box
}
var snake2 = [];
snake2[0] = {
  x: Math.floor((canvasSize2/2)) * box2,
  y: Math.floor((canvasSize2/2)) * box2
}

// Controls
var dir, dir2;

// Sounds
let up = new Audio();
let down = new Audio();
let right = new Audio();
let left = new Audio();
let eat = new Audio();
let dead = new Audio();
up.src = "sounds/up.mp3";
down.src = "sounds/down.mp3";
right.src = "sounds/right.mp3";
left.src = "sounds/left.mp3";
eat.src = "sounds/eat.mp3";
dead.src = "sounds/dead.mp3";

// GameOver
var gameOver1 = false, gameOver2 = false;

// Functions

//Draw the snake at the middle of the canvas
function DrawSnake (){
  for (let i=0; i<snake.length; i++){
    ctx.fillStyle = 'green';
    ctx.fillRect (snake[i].x, snake[i].y, box, box);
  }
}
function DrawSnake2 (){
  for (let i=0; i<snake2.length; i++){
    ctx2.fillStyle = 'green';
    ctx2.fillRect (snake2[i].x, snake2[i].y, box2, box2);
  }
}

//Draws fruit on a random position
function DrawFruit(){
  ctx.fillStyle = "red";
  ctx.fillRect(fruit.x, fruit.y, box, box);
}
function DrawFruit2(){
  ctx2.fillStyle = "red";
  ctx2.fillRect(fruit2.x, fruit2.y, box2, box2);
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
function eatsFruit2(){
  if(snake2[0].x == fruit2.x && snake2[0].y == fruit2.y){
    score2++;
    eat.play();
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

// Change directions
document.addEventListener('keydown', Direction);
function Direction (event){
  if(event.keyCode == 65 && dir != "RIGHT1"){
    dir = "LEFT1";
    left.play();
  } else if(event.keyCode == 87 && dir != "DOWN1"){
    dir = "UP1";
    up.play();
  } else if(event.keyCode == 68 && dir != "LEFT1"){
    dir = "RIGHT1";
    right.play();
  } else if(event.keyCode == 83 && dir != "UP1"){
    dir = "DOWN1";
    down.play();
  }
}
document.addEventListener('keydown', Direction2);
function Direction2 (event){
  if(event.keyCode == 37 && dir2 != "RIGHT2"){
    dir2 = "LEFT2";
    left.play();
  } else if(event.keyCode == 38 && dir2 != "DOWN2"){
    dir2 = "UP2";
    up.play();
  } else if(event.keyCode == 39 && dir2 != "LEFT2"){
    dir2 = "RIGHT2";
    right.play();
  } else if(event.keyCode == 40 && dir2 != "UP2"){
    dir2 = "DOWN2";
    down.play();
  }
}

// Checks for collision
function checkCollision (head, array){
  for (let i=0; i<array.length; i++){
    if (head.x == array[i].x && head.y == array[i].y){
      dead.play();
      gameOver1 = true;
      return true;
    }
  }
  return false;
}
function checkCollision2 (head2, array2){
  for (let i=0; i<array2.length; i++){
    if (head2.x == array2[i].x && head2.y == array2[i].y){
      dead.play();
      gameOver2 = true;
      return true;
    }
  }
  return false;
}

// Score
function drawScore(){
  document.getElementById('score1')
    .innerText = "Player 1: "+score;
}
function drawScore2(){
  document.getElementById('score2')
    .innerText = "Player 2: "+score2;
}

// GameOver
function checkScores() {
  if (gameOver1 == true && gameOver2 == true) {
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
