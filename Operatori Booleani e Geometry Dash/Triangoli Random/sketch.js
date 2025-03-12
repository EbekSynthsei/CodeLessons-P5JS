let centerX, centerY;
let prevX, prevY;
let triangles = [];

function setup() {
  createCanvas(400, 400);
  centerX = width / 2;
  centerY = height / 2;
  prevX = centerX;
  prevY = centerY;
  background(220);
}

function draw() {
  if (frameCount % 10 === 0) {
    let randomX = random(width);
    let randomY = random(height);
    
    let newTriangle = {
      x1: centerX,
      y1: centerY,
      x2: randomX,
      y2: randomY,
      x3: prevX,
      y3: prevY
    };
    
    triangles.push(newTriangle);
    
    prevX = randomX;
    prevY = randomY;
  }
  
  background(220);
  
  for (let t of triangles) {
    fill(255, 80, 80, 20);
    drawTriangle(t.x1, t.y1, t.x2, t.y2, t.x3, t.y3);
  }
}

function drawTriangle(x1, y1, x2, y2, x3, y3) {
  triangle(x1, y1, x2, y2, x3, y3);
}
