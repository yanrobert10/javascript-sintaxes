
// pega o elemento id (retorna o elemento)
const element = document.getElementById("with-id");
console.log(element);

// pega o elemento pela classe (retorna HTMLColection mais n da para usar o forEach)
const element1 = document.getElementsByClassName("with-class");
console.log(element1);

// pega o elemento pela tag html (retorna HTMLColection mais n da para usar o forEach)
const element2 = document.getElementsByTagName("with-name");
console.log(element2);

// pega o elemento pelo seletor css, somento o primeiro elemento do seletor (retorna elemmento)
const element3 = document.querySelector(".with-class");
console.log(element3);

// pega todos os elementos pelo seletor css (retorna o No ==> Nodelist nele sim da para usar o forEach)
const element4 = document.querySelectorAll(".with-class"); 
element4.forEach(el => console.log(el));