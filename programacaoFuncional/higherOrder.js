// Higher Oerder


// Exemplo com .map() JS
const numbers = [2, 4, 6, 8, 10];

const square = n => n * n;

const squareNumber = numbers.map(square);

console.log(squareNumber);


//Exemplo de um retorno de função 
//(currying ou aplicação parcial de função)
const pause = wait => fn => setTimeout(fn, wait);

pause(600)(() => console.log("Waiting 600ms"));

const wait200 = pause(200);
const wait1000 = pause(1000);

wait200(() => console.log("waiting 200ms"));
wait1000(() => console.log("waiting 1000ms"));
