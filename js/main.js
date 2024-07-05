//BOTONES
const botonInicioNode = document.querySelector("#boton-inicio");
const botonReinicioNode = document.querySelector("#boton-reinicio");
// PANTALLAS
const pantallaInicioNode = document.querySelector("#pantalla-inicio");
const pantallaJuegoNode = document.querySelector("#pantalla-juego");
const pantallaFinalNode = document.querySelector("#pantalla-final");
//CAJA DE JUEGO
const cajaJuegoNode = document.querySelector("#caja-juego");
const derrape = document.querySelector("#derrape");
const coliMancha = document.querySelector("#coliMancha");
const coliCartel = document.querySelector("#coliCartel");
const pasadaCoche = document.querySelector("#pasadaCoche");
// ELEMENTOS DE LA PANTALLA DE JUEGO
const scoreNode = document.querySelector("#tiempo");
//ELEMENTOS DE LA PANTALLA FINAL DE JUEGO
const scoreFinalNode = document.querySelector("#tiempo-final");
//VARIABLES GLOBALES DEL JUEGO

let coche = null;
let manchasArr = [];
let cartelesArr = [];
let metasArr = [];
let mainInterval = null;
let obstaculosInterval = null;
let scoreInterval = null;
let metasInterval = null;
let velocidadJuego = 3000;
let velocidadObstaculos = 4;
//AJUSTES VOLUMENES AUDIOS
coliMancha.volume = 0.05;
derrape.volume = 0.05;
pasadaCoche.volume = 0.1;
coliCartel.volume = 0.05;
//FUNCIONES GLOBALES DEL JUEGO

function empezarJuego() {
  pantallaInicioNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";
  scoreNode.innerText = 0;
  coche = new Formula1();

  mainInterval = setInterval(() => {
    bluceJuego();
  }, Math.round(1000 / 60));

  obstaculosInterval = setInterval(() => {
    aparecenManchas();
    aparecenCarteles();
  }, velocidadJuego);
  scoreInterval = setInterval(() => {
    scoreNode.innerText++;
  }, 1000);
  metasInterval = setInterval(() => {
    aparecenMetas();
  }, velocidadJuego * 4);
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
  pasadaCocheMeta();
  desaparencenManchas();
  desaparecenCarteles();
  desaparecenMetas();
}
//UNCIONES ELEMENTOS JUEGO
function aparecenManchas() {
  let posicionAleatoriaX = Math.floor(Math.random() * 150 + 175);
  let distanciaEntreManchasX = 225;
  let posicionAleatoriaY = Math.floor(Math.random() * -200);
  let distanciaEntreManchasY = 300;
  let manchaDerecha = new Mancha(
    posicionAleatoriaX,
    posicionAleatoriaY,
    "derecha",
    velocidadObstaculos
  );
  manchasArr.push(manchaDerecha);

  let manchaizquierda = new Mancha(
    posicionAleatoriaX + distanciaEntreManchasX,
    posicionAleatoriaY - distanciaEntreManchasY,
    "izquierda",
    velocidadObstaculos
  );
  manchasArr.push(manchaizquierda);
}
function aparecenCarteles() {
  let cartelDerecho = new Cartel("derecha", velocidadObstaculos);
  cartelesArr.push(cartelDerecho);

  let cartelIzquierdo = new Cartel("izquierda", velocidadObstaculos);
  cartelesArr.push(cartelIzquierdo);
}
function aparecenMetas() {
  let metas = new Meta(velocidadObstaculos);
  metasArr.push(metas);
}
//FUNCIONES COLISIONES
function colisionCocheMancha() {
  manchasArr.forEach((eachManchas) => {
    if (
      coche.x < eachManchas.x + eachManchas.w &&
      coche.x + coche.w > eachManchas.x &&
      coche.y < eachManchas.y + eachManchas.h &&
      coche.y + coche.h > eachManchas.y
    ) {
      coliMancha.play();

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
      coliCartel.play();
      console.log("accidente");
      gameOver();
    }
  });
}
function pasadaCocheMeta() {
  metasArr.forEach((eachMetas) => {
    if (eachMetas.puedeColisionar === true) {
      if (
        coche.x < eachMetas.x + eachMetas.w &&
        coche.x + coche.w > eachMetas.x &&
        coche.y < eachMetas.y + eachMetas.h &&
        coche.y + coche.h > eachMetas.y
      ) {
        pasadaCoche.play();
        velocidadObstaculos = velocidadObstaculos * 1.5;
        eachMetas.puedeColisionar = false;

        cartelesArr.forEach((eachCarteles) => {
          eachCarteles.velocidad = velocidadObstaculos;
        });
        manchasArr.forEach((eachmanchas) => {
          eachmanchas.velocidad = velocidadObstaculos;
          eachMetas.velocidad = velocidadObstaculos;
        });
      }
    }
  });
}
//FUNCIONES LIMPIEZA DE ELEMENTOS
function desaparencenManchas() {
  let primeraMancha = manchasArr[0];
  if (
    primeraMancha &&
    primeraMancha.y >= cajaJuegoNode.offsetHeight + primeraMancha.h
  ) {
    manchasArr.shift();
    primeraMancha.node.remove();
  }
}
function desaparecenCarteles() {
  let primerCartel = cartelesArr[0];
  if (
    primerCartel &&
    primerCartel.y >= cajaJuegoNode.offsetHeight + primerCartel.h
  ) {
    cartelesArr.shift();
    primerCartel.node.remove();
  }
}
function desaparecenMetas() {
  let primeraMeta = metasArr[0];
  if (
    primeraMeta &&
    primeraMeta.y >= cajaJuegoNode.offsetHeight + primeraMeta.h
  ) {
    metasArr.shift();
    primeraMeta.node.remove();
  }
}
//FUNCIONES FINALES
function gameOver() {
  clearInterval(mainInterval);
  clearInterval(obstaculosInterval);
  clearInterval(scoreInterval);
  clearInterval(metasInterval);
  manchasArr.forEach((eachManchas) => {
    eachManchas.node.remove();
  });
  manchasArr = [];
  cartelesArr.forEach((eachCarteles) => {
    eachCarteles.node.remove();
  });
  cartelesArr = [];
  metasArr.forEach((eachMetas) => {
    eachMetas.node.remove();
  });
  metasArr = [];
  coche.node.remove();
  pantallaJuegoNode.style.display = "none";
  pantallaFinalNode.style.display = "flex";
  scoreFinalNode.innerText = `${scoreNode.innerText} segundos`;
  velocidadObstaculos = 4;
}
function reinicionJuego() {
  pantallaFinalNode.style.display = "none";
  pantallaJuegoNode.style.display = "flex";

  empezarJuego();
}
//EVENT LISTENERS
botonInicioNode.addEventListener("click", () => {
  empezarJuego();
});
window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    coche.giroIzq();
    derrape.play();
  } else if (event.key === "ArrowRight") {
    coche.giroDerch();
    derrape.play();
  }
});

botonReinicioNode.addEventListener("click", () => {
  reinicionJuego();
});
window.addEventListener("keyup", () => {
  setTimeout(() => {
    coche.node.src = "./imagenes/coche.png";
    coche.node.style.transform = "rotate(0deg)";
  }, 100);
});
