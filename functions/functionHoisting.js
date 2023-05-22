//Function hoisting
sayMyName()

function sayMyName() { //sofrerá o hoisting
    console.log("Yan");
}
// Na função anonima não irar sofrerá o hoisting
// const sayMyName = function() {
//    console.log("Yan");
// }