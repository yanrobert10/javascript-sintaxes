// throw

function sayMyName(name = " ") {
    if (name === " ") {
        throw "Nome é Obrigatorio";  // enviar menssagem de erro
    }

    console.log("depois do erro");

}

// try...catch
try {            //Tenta
    sayMyName()
} catch(e) {     //Se deu erro ele manda pro catch aonde está localizado o (e)
    console.log(e);
}


//throw sem try...catch ele para todo o codigo e com try...catch continuar rodando o codigo normalmente