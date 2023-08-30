const express = require("express");

const app = express();

app.listen("3000"); // ficar ouvindo a porta 3000 chamamos de server 

//middleware
app.use(express.json()); // para tranformar em arquivo json

app.route('/').get( (req,res) => res.send(req.query));

app.route('/about/user').get( (req,res) => res.send(req.query));