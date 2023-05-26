// Funcionalidade de transformar notas escolares



function Getnota (nota) {
    let resultadoNota = 0;

    if (nota >= 90 && nota <=100) {
        resultadoNota = "A"
    
    } else if (nota >= 80 && nota <= 89) {
        resultadoNota = "B"
    
    } else if (nota >= 70 && nota <= 79) {
        resultadoNota = "C"
    
    } else if (nota >= 60 && nota <= 69) {
        resultadoNota = "D"
    
    } else if (nota < 60) {
        resultadoNota = "F"
    
    } else {
        console.log("Nota invalida");
    }

    return resultadoNota;

}

console.log(Getnota(85));