class Particle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.r = random(1, 8);
    this.baseR = this.r; // Memorizza il raggio originale
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  createParticle() {
    var particlefill = "rgba(200,222,100,0.7)";
    noStroke();
    fill(particlefill);
    circle(this.x, this.y, this.r * 2); // Usiamo this.r * 2 per il diametro
  }

  moveParticle() {
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  joinParticles(particles) {
    var patStroke = "#02735E";
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke(patStroke);
        line(this.x, this.y, element.x, element.y);
      }
    });
  }

  // Nuovo metodo per reagire al mouse
  reactToMouse() {
    let d = dist(mouseX, mouseY, this.x, this.y);
    let maxDist = 100; // Distanza massima di influenza del mouse
    if (d < maxDist) {
      let scale = map(d, 0, maxDist, 3, 1); // Scala da 3x a 1x
      this.r = this.baseR * scale;
    } else {
      this.r = this.baseR;
    }
  }
}

function inflateText() {
  let h1 = select("#hoverText");
  let chars = h1.elt.innerText.split("");
  h1.html("");
  chars.forEach((char) => {
    let span = createSpan(char);
    span.parent(h1);
    span.style("display", "inline-block");
    span.style("transition", "transform 0.2s ease");
    span.mouseOver(() => span.style("transform", "scale(3)"));
    span.mouseOut(() => span.style("transform", "scale(1)"));
  });
}

let particles = [];
let bgcol = "#0D0D0D";

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }
  inflateText();
}

function draw() {
  background(bgcol);
  for (let i = 0; i < particles.length; i++) {
    particles[i].reactToMouse();
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
}
