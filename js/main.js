//BOTONES
const botonInicioNode = document.querySelector("#boton-inicio");
const botonReinicioNode = document.querySelector("#boton-reinicio");
// PANTALLAS
const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#pantalla-juego");
const pantallaFinalNode = document.querySelector("#pantalla-final");
//CAJA DE JUEGO
const cajaJuegoNode = document.querySelector("#caja-juego");
const derrape = document.querySelector("#derrape")
const coliMancha = document.querySelector("#coliMancha")
const coliCartel = document.querySelector("#coliCartel")
// ELEMENTOS DE LA PANTALLA DE JUEGO
const scoreNode = document.querySelector("#tiempo");
//VARIABLES GLOBALES DEL JUEGO

let coche = null;
let manchasArr = [];
let cartelesArr = [];
let metasArr = [];
let mainInterval = null;
let obstaculosInterval = null;
let scoreInterval = null;
let metasInterval = null;
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
  scoreInterval = setInterval(() => {
    scoreNode.innerText++;
  }, 1000);
  metasInterval = setInterval(() => {
    aparecenMetas();
  }, 10000);
}

function bluceJuego() {
  manchasArr.forEach((eachManchas) => {
    eachManchas.movimientoAutomaticoManchas();
  });
  cartelesArr.forEach((eachCarteles) => {
    eachCarteles.movimientoAutomaticoCarteles();
  });
  metasArr.forEach((eachMetas) => {
    eachMetas.movimientoAutomaticoMetas();
  });

  colisionCocheMancha();
  colisionCocheCartel();
  desaparencenManchas();
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
function aparecenMetas() {
  let meta = new Meta();
  metasArr.push(meta);
}
function colisionCocheMancha() {
  manchasArr.forEach((eachManchas) => {
    if (
      coche.x < eachManchas.x + eachManchas.w &&
      coche.x + coche.w > eachManchas.x &&
      coche.y < eachManchas.y + eachManchas.h &&
      coche.y + coche.h > eachManchas.y
    ) {
      coliMancha.play()
      console.log("accidente");
      gameOver();
    }
  });
}
function colisionCocheCartel() {
  cartelesArr.forEach((eachCarteles) => {
    if (
      coche.x < eachCarteles.x + eachCarteles.w &&
      coche.x + coche.w > eachCarteles.x &&
      coche.y < eachCarteles.y + eachCarteles.h &&
      coche.y + coche.h > eachCarteles.y
    ) {

      coliCartel.play()
      console.log("accidente");
      gameOver();
    }
  });
}
function desaparencenManchas() {
  let primeraMancha = manchasArr[0];
  if (
    primeraMancha &&
    primeraMancha.y > 0(cajaJuegoNode.offsetHeight + primeraMancha.h)
  ) {
    manchasArr.shift();
    primeraMancha.node.remove();
  }
}
function desaparecenCarteles() {
  let primerCartel = cartelesArr[0];
  if (
    primerCartel &&
    primerCartel.y > 0(cajaJuegoNode.offsetHeight + primerCartel.h)
  ) {
    cartelesArr.shift();
    primerCartel.node, remove();
  }
}

function gameOver() {
  clearInterval(mainInterval);
  clearInterval(obstaculosInterval);
  pantallaJuegoNode.style.display = "none";
  pantallaFinalNode.style.display = "flex";
}
function reinicionJuego() {
  pantallaFinalNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";
  clearInterval(mainInterval);
  clearInterval(obstaculosInterval);
  clearInterval(scoreInterval);
  manchasArr.forEach((eachManchas) => {
    eachManchas.node.remove();
  });
  manchasArr = [];
  cartelesArr.forEach((eachCarteles) => {
    eachCarteles.node.remove();
  });
  cartelesArr = [];
  scoreNode.remove();

  coche.node.remove();
  empezarJuego();
}
//EVENT LISTNERS
botonInicioNode.addEventListener("click", () => {
  empezarJuego();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    coche.giroIzq();
    derrape.play()
  } else if (event.key === "ArrowRight") {
    coche.giroDerch();
    derrape.play()
  }
});

botonReinicioNode.addEventListener("click", () => {
  reinicionJuego();
});
