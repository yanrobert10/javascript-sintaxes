class Atleta {
    peso;
    categoria;
    constructor(peso) {
        this.peso = peso;
        this.definirCategoria(); // Chamando o método para definir a categoria no construtor
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = "infantil"
        }
        else if (this.peso <= 65) {
            this.categoria = "juvenil"
        }
        else {
            this.categoria = "adulto"
        }
    }


}


class Lutador extends Atleta {
    constructor(peso) {
        super(peso);
    }
    definirCategoria() {
        if (this.peso <= 54) {
            this.categoria = "pluma";
        } else if (this.peso <= 60) {
            this.categoria = "leve";
        } else if (this.peso <=75) {
            this.categoria = "meio-leve";
        }
        else {
            this.categoria = "pesado";
        }
    }
}

// criando o objeto
const lutador = new Lutador(53);
console.log(lutador);
