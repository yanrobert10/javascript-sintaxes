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

// manipulando estilos e classes

const element1 = document.querySelector("body ");
element1.classList.add("active", "red"); // adicionar
console.log(element1.classList);
element1.classList.remove("active"); // remover
element1.classList.toggle("active"); // interruptor se eu add ele tira
console.log(element1.classList);


// Navegando pelos elementos 

console.log(header.parentElement);// Retornao o elemento pai
console.log(header.parentNode);// Retornao o elemento pai

console.log(element1.childNodes); // Retornao todos elementos filhos
console.log(element1.firstElementChild); // Retornao o primeiro elemento filho
console.log(element1.lastElementChild); // Retornao o ultimo elemento filho
console.log(element1.nextElementSibling); // Retornao o proximo elemento filho
console.log(element1.nextSibling); // Retornao a proxima linha do elemento filho
console.log(element1.previousElementSibling); // Retornao o filho anterior


// Criando e adicionando elementos

//criar elemento
const div = document.createElement("div");
div.innerText = "Olá Devs!!";

// append prenped
element1.append(div); // adicionar elemento depois

// insertBefore elemento
const script = document.createElement("script");
element1.insertBefore(div, script); // inserir elemento antes da tag script
element1.insertBefore(div, header.nextElementSibling); // inserir elemento depois da tag header
