//Function scope
let subject;

function createThink() {
    subject = "study";
    return subject;//se não colocar o return irá retornar underfined na linha 10
}

console.log(subject); //return underfined
console.log(createThink());//return study
console.log(subject);//return study