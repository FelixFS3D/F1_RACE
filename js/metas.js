class Meta {
  constructor(velocidad) {
    this.node = document.createElement("img");
    this.node.src = "./imagenes/logo.png";
    cajaJuegoNode.append(this.node);
    console.log("meta creandose")
    this.x = 50;
    this.y = -400;
    this.w = 704;
    this.h = 351;
    
    this.puedeColisionar = true
    this.node.style.position = "absolute";
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
    this.velocidad = velocidad;
  }
  movimientoAutomaticoMetas(){
    this.y += this.velocidad  
    this.node.style.top = `${this.y}px`

  }
}
