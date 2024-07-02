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
let cartelesArr = [];
let mainInterval = null;
let obstaculosInterval = null;

//FUNCIONES GLOBALES DEL JUEGO

function empezarJuego() {
  console.log("iniciando juego");
  pantallaInicioNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";

  coche = new Formula1();
  console.log(coche);

  mainInterval = setInterval(() => {
    bluceJuego();
  }, Math.round(1000 / 60));

  obstaculosInterval = setInterval(() => {
    aparecenManchas();
    aparecenCarteles();
  }, 3000);
}

function bluceJuego() {
  manchasArr.forEach((eachManchas) => {
    eachManchas.movimientoAutomaticoManchas();
    


  });
  cartelesArr.forEach((eachCarteles)=>{
    eachCarteles.movimientoAutomaticoCarteles();
        })
  colisionCocheMancha()
  colisionCocheCartel()
}

function aparecenManchas() {
  let posicionAleatoriaX = Math.floor(Math.random() * 150 + 175);
  let distanciaEntreManchasX = 225;
  let posicionAleatoriaY = Math.floor(Math.random() * -200);
  let distanciaEntreManchasY = 300;
  let manchaDerecha = new Mancha(
    posicionAleatoriaX,
    posicionAleatoriaY,
    "derecha"
  );
  manchasArr.push(manchaDerecha);

  let manchaizquierda = new Mancha(
    posicionAleatoriaX + distanciaEntreManchasX,
    posicionAleatoriaY - distanciaEntreManchasY,
    "izquierda"
  );
  manchasArr.push(manchaizquierda);
  
}
function aparecenCarteles() {
 
  
  
  
  let cartelDerecho = new Cartel("derecha");
  cartelesArr.push(cartelDerecho);

  let cartelIzquierdo = new Cartel("izquierda");
  cartelesArr.push(cartelIzquierdo);
  
}
function colisionCocheMancha(){
  manchasArr.forEach((eachManchas)=>{
    if(
      coche.x < eachManchas.x + eachManchas.w &&
      coche.x + coche.w > eachManchas.x &&
      coche.y < eachManchas.y + eachManchas.h &&
      coche.y + coche.h > eachManchas.y
    ){
      console.log("accidente")
  gameOver()
    }
  })
  
}
function colisionCocheCartel(){
  cartelesArr.forEach((eachCarteles)=>{
    if(
      coche.x < eachCarteles.x + eachCarteles.w &&
      coche.x + coche.w > eachCarteles.x &&
      coche.y < eachCarteles.y + eachCarteles.h &&
      coche.y + coche.h > eachCarteles.y
    ){
      console.log("accidente")
  gameOver()
    }
  })
  
}

function gameOver() {
  clearInterval(mainInterval);
  clearInterval(obstaculosInterval);
  pantallaJuegoNode.style.display = "none"
  pantallaFinalNode.style.display = "flex"
}
//EVENT LISTNERS
botonInicioNode.addEventListener("click", () => {
  empezarJuego();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    coche.giroIzq();
  }
  else if(event.key === "ArrowRight"){
    coche.giroDerch();
    
  }
});
