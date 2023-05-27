

function transformaGrau (grau) {
    const celciusExiste = grau.toUpperCase().includes("C", ""); //O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string, retornando true ou false
    const fahrenheitExiste = grau.toUpperCase().includes("F");

    if(!celciusExiste && !fahrenheitExiste) {
        throw new Error("Grau não identificado");
    }


    // fluxo ideal, F -> C
    let atualizarGrau = Number(grau.toUpperCase().replace("F", "")); //O método replace() retorna uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres)
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9;
    let sinalGrau = "C";

    if(celciusExiste) {
            atualizarGrau = Number(grau.toUpperCase().replace("C", " "));
            formula = (celcius) => celcius * 9/5 + 32;
            sinalGrau = "F";
        }


    return formula(atualizarGrau) + sinalGrau;
}

try {
    //console.log(transformaGrau("50z"));
    console.log(transformaGrau("100c"));

} catch (erro) {
    console.log(erro.message);
}