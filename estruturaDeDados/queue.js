// Modelando

class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(item) {
        this.data.push(item);
        console.log(`${item} chegou a fila!`);
    }

    dequeue() {
        const item = this.data.shift(); // ele vai fazer que o primeiro a entrar saia da fila
        console.log(`${item} saiu da fila!`);
    }
}

// Utilizando 

const fila = new Queue();

fila.enqueue("Yan");
fila.enqueue("Edu");
fila.enqueue("Lucas");
fila.dequeue();
fila.dequeue();
fila.dequeue();