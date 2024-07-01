//BOTONES
const botonInicioNode = document.querySelector("#boton-inicio");
// PANTALLAS
const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#pantalla-juego");
const pantallaFinalNode = document.querySelector("#pantalla-final");
//CAJA DE JUEGO
const cajaJuegoNode = document.querySelector("#caja-juego");

//VARIABLES GLOBALES DEL JUEGO

let coche = null;
let manchasArr = [];
let mainInterval = null;
let obstaculosInterval = null;

//FUNCIONES GLOBALES DEL JUEGO

function empezarJuego() {
  console.log("iniciando juego")
  pantallaInicioNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";

  coche = new Formula1();
  console.log(coche);

  mainInterval = setInterval(() => {
    bucleJuego();
  }, Math.round(1000 / 60));

  obstaculosInterval = setInterval(() => {
    aparecenManchas();
  }, 3000);
}

function bluceJuego() {


  manchasArr.forEach((eachManchas) => {
    eachManchas.movimientoAutomatico();
  });
}


function aparecenManchas() {
  let posicionAleatoriaX = Math.floor(Math.random() * -50);
  let distanciaEntreManchas = 250;
  let manchaIzquierda = new Mancha(posicionAleatoriaX, "izquierda");
  manchasArr.push(manchaIzquierda);
  let manchaDerecha = new Mancha(
    posicionAleatoriaX + distanciaEntreManchas,
    "derecha"
  );
  manchasArr.push(manchaDerecha);
}

function gameOver(){
  clearInterval(mainInterval)
  clearInterval(obstaculosInterval)
}
//EVENT LISTNERS
botonInicioNode.addEventListener("click", () => {
  empezarJuego();
});
cajaJuegoNode.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    coche.giroIzq();
  }
});
