// Orientado a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    get area() {
        return this.#calcularArea();
    }

    #calcularArea() {
        return this.altura * this.largura;
    }
}

// criar objeto 

let poligono = new Poligono(150, 220);
console.log(poligono);