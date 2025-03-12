const MY_NAME = "Emanuele"; //string
let age = 20; //number
let my_height = 183.7; //dotted number
let infinito = 5/0; // INFINITY
let nonUnNumero= "alfabeto" * 5; //Not a Number
let indefinito; //
//let reallyBigNumber= 12412412412478912468412127864n; //BIGINT : NON TUTTI I BROWSER SUPPORTANO
let unBelNiente= null;
let verità= true; //Booleano (true false)
let falso = 0; // Altro Booleano (1 Vero, 0 Falso);

function setup(){
  createCanvas(400,400);
  print(MY_NAME, age, my_height, infinito, nonUnNumero, indefinito, unBelNiente, verità, boolean(falso));
}
