const axios = require("axios");

Promise.all([
    axios.get("https://api.github.com/users/yanrobert10"),
    axios.get("https://api.github.com/users/yanrobert10/repos")
])

.then( responses => {  // then pega a resposta
    console.log(responses[0].data.login);
    console.log(responses[1].data.length);
})

.catch( err => console.log(err.message)); // passa somenta a menssagem do erro