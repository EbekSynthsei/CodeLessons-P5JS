var x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, 200, 100, 100);
  
  
  if(x > width){
    print("Fuori dallo schermo!");
    x = x - 3; // perchè non funziona?
  }
  x = x + 3;
  
  
  
}