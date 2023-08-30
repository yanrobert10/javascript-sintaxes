const express = require("express");

const app = express();

app.listen("3000"); // ficar ouvindo a porta 3000 chamamos de server 

//middleware
app.use(express.json()); // para tranformar em arquivo json

let author = "Yan";
// estrutura get
app.route("/").get( (req,res) => res.send(author)); // exemplo de uma rota GET
app.route("/sobre").get( (req,res) => res.send("Hello Sobre"));

//estrutura post
app.route("/").post( (req, res) => res.send(req.body));

//estrutura put
app.route("/").put( (req,res) => {
    author = req.body.author;
    res.send(author);
})

//estrutura delete
app.route("/:identificador").delete( (req,res) => {
    // aqui podemos passar algum codigo pare remover algo 
    res.send(req.params.identificador)
})