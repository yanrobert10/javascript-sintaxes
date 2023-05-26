

function celsiusOuF(tipoTemperatura, valor) {
    let resultado = 0;

    switch(tipoTemperatura) {

        case "C":
            resultado = (valor - 32) * 5/9;
        break
            
        case "F":
            resultado = valor * 9/5 + 32;
        break
        default: "Não implementado";
    }

    return resultado.toFixed(2);
}

console.log(celsiusOuF("C", 100));