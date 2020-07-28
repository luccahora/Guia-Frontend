/* import */
const express = require('express');
const nunjuncks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.set("view engine", "html");

nunjuncks.configure("views", {
    express:server
});

/* Rotas / */
server.get("/", function (req, res) {
    return res.render("about");
});

server.get("/cursos", function (req, res) {
    return res.render("cursos");
});

server.listen(5000, function () {
    console.log("servidor rodando");
});
