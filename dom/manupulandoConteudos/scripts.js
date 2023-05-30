// textContent alterar ou concatenar o texto do elemento
const element = document.querySelector("h1");

element.textContent = "alterei o texto";
element.textContent += " e concatenei o texto ao lado";

console.log(element.textContent); // verificando somente o valor de texto


// innerText 
element.innerText = "Alterei o texto interno";

console.log(element.innerText); // verificando


// innerHTML
element.innerHTML = "alterei o texto interno THML !!<small>!!</small>";

console.log(element.innerHTML); // verificando


//value 
const input = document.querySelector("input");

input.value = "alterei o valor do input"; //o atributo value serve tanto para tribuir um valor ou pegar o valor

console.log(input.value); // verificando

// Manipulando o element
// atributos
const header = document.querySelector("header");
header.setAttribute("id", "header"); //  adicionei um atributo id na tag header

const headerID = document.querySelector("#header");

console.log(headerID.getAttribute("class")); // verificando, pegar o atributo class e imprimir no console log

header.removeAttribute("id"); // remover atributo
header.removeAttribute("class"); 