class Mancha {
  constructor(posicionX, posicionY, tipo, velocidad) {
    this.node = document.createElement("img");
    if (tipo === "izquierda") {
      this.node.src = "./imagenes/manchaizq.png";
    } else if (tipo === "derecha") {
      this.node.src = "./imagenes/manchaderch.png";
    }
    cajaJuegoNode.append(this.node);

    this.x = posicionX;
    this.y = posicionY;
    this.w = 80;
    this.h = 73;

    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.velocidad = velocidad;
  }

  movimientoAutomaticoManchas() {
    this.y += this.velocidad;
    this.node.style.top = `${this.y}px`;


    
  }
}
class Cartel {
  constructor(tipo,velocidad) {
    this.node = document.createElement("img");
    if (tipo === "izquierda") {
      this.node.src = "./imagenes/cartelIzq.png";
      this.x = 10;
    } else if (tipo === "derecha") {
      this.node.src = "./imagenes/cartelDer.png";
      this.x = 650;
    }

    cajaJuegoNode.append(this.node);
    //console.log("obstaculo creandose");
    
    this.y = 0;
    this.w = 125;
    this.h = 70;

    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.velocidad = velocidad;
  }
  movimientoAutomaticoCarteles() {
    this.y += this.velocidad;
    this.node.style.top = `${this.y}px`;
  }
}
