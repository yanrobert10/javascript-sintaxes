const express = require("express");

const app = express();

app.listen("3000"); // ficar ouvindo a porta 3000 chamamos de server 

//middleware
app.use(express.json()); // para tranformar em arquivo json

// Body Params
app.route("/").post((req, res) => {
    try {
        console.log("Received POST request with body:", req.body);
        if (req.body) {
            const {nome, cidade} = req.body
            res.send(`Meu nome é: ${nome} e minha cidade é ${cidade}`);
        } else {
            res.status(400).send("Field 'name' is missing in the request body.");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred.");
    }
});