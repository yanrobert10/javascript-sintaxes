


let familia = {
    receitas: [2500, 3200.52, 250.12, 360.15],
    despesas: [324.25, 127.30, 176,25, 1450.78],
}

function sum(array) {
    let total = 0;

    for(let valor of array) {
        total += valor;
    }

    return total;
}

function calcularBalanco () {
    const calculoReceitas = sum(familia.receitas);
    const calculoDespesas = sum(familia.despesas);

    const total = calculoReceitas - calculoDespesas;

    const temSaldo = total >= 0;

    let balancoTexto = "Negativo";

    if (temSaldo) {
        balancoTexto = "Positivo";
    }

    console.log(`Seu saldo é ${balancoTexto}: ${total.toFixed(2)} R$`)
}

calcularBalanco()