class Mancha {
  constructor(posicionX, tipo) {
    this.node = document.createElement("img");
    if (tipo === "izquierda") {
      this.node.src = ".imagenes/manchaizq.png";
    } else if (tipo === "derecha") {
      this.node.src = ".imagenes/manchaderch.png";
    }
    cajaJuegoNode.append(this.node);

    this.x = posicionX;
    this.y = cajaJuegoNode.offsetHeight;
    this.w = 102;
    this.h = 73;

    this.node.style.position = "absolute";
    this.node.style.left = `~${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.velocidad = 2;

  }

  movimientoAutomatico() {
this.y-= this.velocidad;
this.node.style.top = `${this.y}px`;
  }
}
