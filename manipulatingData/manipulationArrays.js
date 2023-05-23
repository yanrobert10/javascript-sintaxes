// Manipulando Array

//Criar Array com construtor
let myArray = new Array("a", "b", "c", "d");
console.log(myArray);

//Contar elemenros de um Array
console.log(myArray.length);

//Transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação";
console.log(Array.from(word));


let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs");
// adicionar no começo 
techs.unshift("sql");
// remover do fim
techs.pop();
// remover do começo
techs.shift();
// pegar somente alguns elementos do array
//console.log(techs.slice(1, 3));
// remover 1 ou mais itens em qualquer posição do array
techs.splice(1, 3);
// encontrar a posição de um elemento do array
let index = techs.indexOf("css");
techs.slice(index, 1);

console.log(techs);
