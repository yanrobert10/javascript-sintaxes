// Composição de Funções
// Um encadeamento de Funções
// Uma função que retorna um dado e vai pra outra função,
// que retorna um dado e vai pra outra função,que retorna...
const people = ["Rafa", "Diego", "Dani", "Rod"];
const upperCasePeopleThatStartsWithD = people
.filter(person => person.startsWith("D"))
.map(dperson => dperson.toUpperCase());

console.log(upperCasePeopleThatStartsWithD)