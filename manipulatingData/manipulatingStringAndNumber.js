// Manipulating String and Number

// Transform String in Number and Number in String
let string = "123"
console.log(Number(string));

let number = 321
console.log(String(number));


// Transformar um numero quebrado com 2 casas decimais e trocar ponto por vírgula
let number1 = 345.3352845
// Colocando para aparecer 2 casa decimais após a virgula e troca do ponto pela virgula
console.log(number1.toFixed(2).replace(".", ",")); 


//Transformar letras minusculas em maiúsculas. Faça o contrário disso também
let word = "Programa É Muito Bacana!"

console.log(word.toUpperCase());
console.log(word.toLowerCase());