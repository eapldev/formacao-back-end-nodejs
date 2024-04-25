const express = require("express");
const routes = require("./routes");

// cria um novo app usando express
const app = express();

// configura o express para usar o padrão json de comunicação
app.use(express.json());
app.use(routes)

app.listen(3000);
