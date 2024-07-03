class Meta {
  constructor() {
    this.node = document.querySelector("img");
    this.node.src = "./imagenes/logo.png";
    cajaJuegoNode.append(this.node);
    this.x = 0;
    this.y = 0;
    this.w = 704;
    this.h = 351;

    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.velocidad = 3;
  }
  movimientoAutomaticoMetas(){
    this.y += this.velocidad  
    this.node.style.top = `${this.y}px`

  }
}
