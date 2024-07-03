class Formula1 {
  constructor() {
    this.node = document.createElement("img");
    this.node.src = "./imagenes/coche.png";
    cajaJuegoNode.append(this.node);

    this.x = 350;
    this.y = 600;
    this.w = 80;
    this.h = 120;

    (this.node.style.position = "absolute"),
      (this.node.style.left = `${this.x}px`);
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    this.giro = 5;
    //this.node.style.transition = "trnasform 1s"
  }
  movimientoAutonomo() {}

  giroIzq() {
    if (this.x >= 0) {
      this.x -= this.giro;
      this.node.style.left = `${this.x}px`;
      this.node.src = "./imagenes/giroIzq.png";
      this.node.style.transform = "rotate(-10deg)";
      /**/
    }
  }
  giroDerch() {
    if (this.x + this.w < cajaJuegoNode.offsetWidth) {
      this.x += this.giro;
      this.node.style.left = `${this.x}px`;
      this.node.src = "./imagenes/giroDer.png";
      this.node.style.transform = "rotate(10deg)";
      /*setTimeout(() => {
        this.node.src = "./imagenes/coche.png";
        this.node.style.transform = "rotate(0deg)";
      }, 1000);*/
    }
  }
}
