class Formula1 {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = ".imagenes/coche.png";
    cajaJuegoNode.append(this.node);

    this.x = 250; 
    this.y = 300;
    this.w = 97;
    this.h = 142;
    

    this.node.style.position = "absolute",
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.giro = 20;
  }
  giroIzq() {
    if (this.x >= 0) {
      this.x -= this.giro;
      this.node.style.left = `${this.x}px`;
    }
    
  }
  giroDerch() {}
}
