// for...in
// pegar propriedades de um objeto

let person = {
    name: "Yan",
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property);
    console.log(person[property]);
}