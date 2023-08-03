// adding javascript events

const h1 = document.querySelector("h1");

h1.addEventListener("click", print);   // to interact with user interface

function print() {
  console.log("Hello World!");
}

// events
// arguments events

const input = document.querySelector("input");
input.onkeydown = function(event) {  // events
    console.log(event.currentTarget.value); // passing arguments
}