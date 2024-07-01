//VARIABLES GLOBALES DEL JUEGO
let coche = null;
let manchasArr = [];
let obstaculosInterval = null;

//FUNCIONES GLOBALES DEL JUEGO

function empezarJuego() {
  coche = new Formula1();
}
function bluceJuego() {}
function aparecenManchas() {
  let posicionAleatoriaX = Math.floor(Math.random() * 50);
  let distanciaEntreManchas = 250;
  let manchaIzquierda = new Mancha(posicionAleatoriaX, "izquierda");
  manchasArr.push(manchaIzquierda);
  let manchaDerecha = new Mancha(posicionAleatoriaX + distanciaEntreManchas,"derecha");
  manchasArr.push(manchaDerecha);
  
}
//EVENT LISTNERS
