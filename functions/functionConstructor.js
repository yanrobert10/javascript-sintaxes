/*
    *expressão new
    *criar umn novo objeto
    *this keyword
*/

function Person(name) {
    this.name = name;
    this.walk = function() {
        return this.name + " está andando"
    }
}

const yan = new Person("Yan");
const edu = new Person("Edu");
console.log(yan.walk());
console.log(edu.walk());
