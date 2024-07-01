class Mancha{
    constructor (posicionX,tipo){
        this.node = document.createElement("img")
        if(tipo === "izquierda"){
this.node.src = ".imagenes/manchaizq.png"
        }
        else if(tipo === "derecha"){
            this.node.src = ".imagenes/manchaderch.png"
        }
        this.x = posicionX
        this.y = 0
    }
}
