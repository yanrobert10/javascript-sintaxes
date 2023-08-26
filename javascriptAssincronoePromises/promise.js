// Promise 

// A promessa de que algo irá acontecer
// Poderá dar certo ou errado, 
// Mais irá acontecer 
let aceitar = false;

const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve ("3. Seu pedido foi aceito!");
    } else {
        return reject ("3. Pedido negado");
    }
    
});

console.log("1. Pedindo Uber");

promessa
.then(res => console.log(res))
.catch(erro => console.log(erro))
.finally(() => console.log("4. Finalizado"));

console.log("2. Aguardando")