// Frunções aceitam qualquer tipo de dado como argumento
function imprimirDado(dado) {
    console.log("1. Outras tarefas");
    console.log(dado());
}

imprimirDado(function () {
    return "2. Olá mundo";
})