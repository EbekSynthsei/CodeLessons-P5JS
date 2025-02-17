let x1 = 100, x2 = 25; //Dichiarazione e assegnazione con let
var y1 = 50, y2 = 75; //Dichiarazione e assegnazione con var

const MY_NAME = "Emanuele"; //Dichiarazione e assegnazione di una costante

function setup() {
  createCanvas(400, 400);
  background(220, 80, 15);
  print(MY_NAME); // Utilizzo di una costante
  rect(x1, y1, x2, y2); // Utilizzo di più variabili
  x1 = 200;// Riassegnazione
  x2 = 150;// Riassegnazione
  rect(x1, y1, x2, y2); // Riutilizzo di variabili
}