// Manipulando String e Array

//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do Array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver o Amor!";

let myArray = phrase.split(" "); //String to Array
console.log(myArray);

let phraseWithUnderscore = myArray.join("_"); // Array to String
console.log(phraseWithUnderscore);