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
  document.querySelector('.score')
    .innerText = "Your score: "+score;
}
