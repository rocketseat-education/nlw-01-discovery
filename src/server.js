const express = require("express")
const server = express()


// configurar caminhos da minha aplicação
// página inicial
// req: Requisição
// res: Resposta
server.get("/", (req, res) => {
    res.send("Cheguei aqui")
})


// ligar o servidor
server.listen(3000)