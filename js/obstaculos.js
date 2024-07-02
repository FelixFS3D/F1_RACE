class Mancha {
  constructor(posicionX, posicionY, tipo) {
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
    this.velocidad = 2;
  }

  movimientoAutomaticoManchas() {
    this.y += this.velocidad;
    this.node.style.top = `${this.y}px`;
  }
}
class Cartel {
  constructor(posicionY, tipo) {
    if (tipo === "izquierda") {
      this.node.src = "./imagenes/cartelPublicitario.png";
    } else if (tipo === "derecha") {
      this.node.src = "./imagenes/cartelPublicitario.png";
    }

    cajaJuegoNode.append(this.node);

    this.x = 0;
    this.y = posicionY;
    this.w = 125;
    this.h = 45;

    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.velocidad = 2;
  }
  movimientoAutomaticoCarteles() {
    this.y += this.velocidad;
    this.node.style.top = `${this.y}px`;
}
}
