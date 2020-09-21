let fruit = {
  x: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box,
  y: Math.floor(1 + (Math.random() * (canvasSize - 1))) * box
}

//Draws fruit on a random position
function DrawFruit(){
  ctx.fillStyle = "red";
  ctx.fillRect(fruit.x, fruit.y, box, box);
}
