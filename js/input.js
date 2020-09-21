let dir;
let up = new Audio();
let down = new Audio();
let right = new Audio();
let left = new Audio();

up.src = "sounds/up.mp3";
down.src = "sounds/down.mp3";
right.src = "sounds/right.mp3";
left.src = "sounds/left.mp3";

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

//Toggle pause
document.addEventListener('keydown', togglePause);
function togglePause (event){
  if(event.keyCode == 32 || event.keyCode == 27){
    alert("GAME PAUSED!");
  }
}
