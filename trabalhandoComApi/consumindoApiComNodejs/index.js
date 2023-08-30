const express = require("express");
const axios = require("axios");

const app = express();

app.listen("3000"); // ficar ouvindo a porta 3000 chamamos de server 

//middleware
app.use(express.json()); // para tranformar em arquivo json

app.route("/").get( (req,res) => {
    axios.get("https://api.github.com/users/yanrobert10")
    .then(result => res.send((`<img src="${result.data.avatar_url}"/>`)))
    .catch(err => console.log(err))
})