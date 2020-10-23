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


// FUNCTIONS

//Draw the snake at the middle of the canvas
function DrawSnake(player, context, unit) {
  for (let i=0; i<player.length; i++) {
    context.fillStyle = 'green';
    context.fillRect(player[i].x, player[i].y, unit, unit);
  }
}

//Draws fruit on a random position
function DrawFruit(context, food, unit) {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, unit, unit);
}

//If the snake eats the fruit
function eatsFruit() {
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
function eatsFruit2() {
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
function Direction (event) {
  if(event.keyCode == 65 && dir != "RIGHT1"){
    dir = "LEFT1";
    left.play();
  } else if(event.keyCode == 87 && dir != "DOWN1") {
    dir = "UP1";
    up.play();
  } else if(event.keyCode == 68 && dir != "LEFT1") {
    dir = "RIGHT1";
    right.play();
  } else if(event.keyCode == 83 && dir != "UP1") {
    dir = "DOWN1";
    down.play();
  } else if (event.keyCode == 37 && dir2 != "RIGHT2") {
    dir2 = "LEFT2";
    left.play();
  } else if(event.keyCode == 38 && dir2 != "DOWN2") {
    dir2 = "UP2";
    up.play();
  } else if(event.keyCode == 39 && dir2 != "LEFT2") {
    dir2 = "RIGHT2";
    right.play();
  } else if(event.keyCode == 40 && dir2 != "UP2") {
    dir2 = "DOWN2";
    down.play();
  }
}

// Checks for collision
function checkCollision (head, array) {
  for (let i=0; i<array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      dead.play();
      return true;
    }
  }
  return false;
}

// Score
function drawScore() {
  document.getElementById('score1')
    .innerText = "Player 1: "+score;
}
function drawScore2() {
  document.getElementById('score2')
    .innerText = "Player 2: "+score2;
}

// GameOver
function checkScores(over1, over2, point1, point2) {
  if (over1 == true && over2 == true) {
    // Player 1 wins
    if (point1 > point2) {
      alert("Player 1 wins!");
    }
    // Player 2 wins
    else if (point2 > point1) {
      alert("Player 2 wins!");
    }
    // Draw
    else if (point1 == point2) {
      alert("It's a draw!");
    }
  }
}
