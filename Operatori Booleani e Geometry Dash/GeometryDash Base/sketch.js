// Define the Player class
class Player {
  //Quando chiamo il costruttore creo il giocatore alla x e la y selezionate nelle parentesi
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 30;
    this.h = 30;
    this.vy = 0;
    this.speed = 5;
    this.gravity = 0.5;
    this.jumpForce = -15;
  }
  //Quando mostro il personaggio lo coloro di rosso e gli dico di essere grande quanto i suoi stessi dati
  show() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.w, this.h);
  }
  //Cosa fa ogni secondo?
  update() {
    this.vy += this.gravity; //La sua velocità verticale aumenta della sua gravità
    this.y += this.vy; // La sua posizione verticale aumenta della sua velocità

    if (this.y + this.h > height) { // Se il bordo inferiore è sulla base della mia tela resti fermo e smetto di cadere
      this.y = height - this.h;
      this.vy = 0;
    }
  }

  jump() { // Se non sto toccando il bordo inferiore salto
    if (this.y + this.h === height) {
      this.vy = this.jumpForce;
    }
  }
}
/////////////////////////////////////////////////////////

// Define the Obstacle class
class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = -3;
  }

  show() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.w, this.h);
  }

  update() {
    this.x += this.speed;
  }

  offscreen() {
    return this.x < -this.w;
  }

  hits(player) { //Dandogli in pasto il giocatore controllo se si toccano
    return collideRectRect(this.x, this.y, this.w, this.h, player.x, player.y, player.w, player.h);
  }
}
///////////////////////////////////////////////
//DEFINISCO GLI ELEMENTI DEL GIOCO
let player; //Dichiaro il giocatore
let obstacles = []; //dichiaro un insieme di ostacoli

function setup() { // preparo il gioco
  createCanvas(windowWidth, windowHeight);
  let p = createP("<p > Per saltare premi spazio</p>"); // Creo un elemento scritta su schermo
  p.position(5,0);
  player = new Player(100, height - 50); //Creo il giocatore alla posizione scelta
  obstacles.push(new Obstacle(width, height - 50, 50, 50)); //Creo un nuovo ostacolo da mettere nell'insieme
}

function draw() {
  background(220); //Sfondo
  player.show(); // mostro il giocatore
  player.update(); // Verifico cosa fa il giocatore

  for (let i = obstacles.length - 1; i >= 0; i--) { // Per ogni ostacolo dentro il mio insieme meno uno, fino a che arrivo a 0, conto uno all'indietro.
    obstacles[i].show(); //Uso il numero di ostacolo a cui sono arrivato e gli dico "mostrati"
    obstacles[i].update(); //Uso il numero di ostacolo e gli dico "Aggiorna la posizione"

    if (obstacles[i].hits(player)) { // Se il numero di ostacolo a cui sono colpisce il giocatore, stoppo il gioco.
      console.log("Game Over");
      noLoop();
    }

    if (obstacles[i].offscreen()) { // Se il numero di ostacolo a cui sono, esce dallo schermo, lo tolgo dall'insieme
      obstacles.splice(i, 1);
    }
  }

  if (frameCount % 75 === 0) { //Ogni tot secondi creo un nuovo ostacolo da aggiungere al mio insieme di ostacoli
    obstacles.push(new Obstacle(width, height - 50, 50, 50));
  }
}

///////////////////////////////////
//DEFINISCO I CONTROLLI
function keyPressed() {
  if (key === ' ') {
    player.jump();
  }
}
