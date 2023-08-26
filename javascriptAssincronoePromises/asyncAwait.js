

const promessa = new Promise( function(resolve, reject) {

    return reject("error");

})

async function start() {
    try {  //pegando resposta
        const result = await promessa;
        console.log(result);
    } catch(err) {
        console.log(err);
    } finally {
        console.log("Rodar Sempre!")
    }
}

start();