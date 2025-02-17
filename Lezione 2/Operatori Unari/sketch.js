
//Operatori Unari
var x = 1; //Dichiariamo un intero
var y = -12; // Dichiariamo un intero negativo
var option = true; // Dichiariamo un booleano
var otherOption = 0; // Dichiariamo un intero (per usarlo come booleano)
//Operatori Unari pt2
var variabile = 5;
++variabile;

function setup(){
  x = -x; //Invertiamo il valore di un numero e lo assegnamo alla sua variabile
  console.log("X: " + x); // Risultato 
  console.log("Inversione Y n1: " + (-y)); //Le parentesi aiutano a chiarire 
  console.log("Inversione Y n2: " + -y);
  console.log("Negazione booleano : "+ !option) //Negazione 
  console.log("Booleano come numero n1 : "+ (+option));//  Trasformiamo un booleano in numero
  console.log("Booleano come numero n2 : " + (-option));
  console.log(!otherOption); // Neghiamo un numero come booleano
  console.log(+otherOption); // L'operatore non ha effetto
  //Operatori Unari pt2
  console.log("Parte 2");
  console.log(variabile);
  console.log("");
  console.log(variabile++);//Abbiamo incrementato di uno la variabile
  console.log(variabile);
 }