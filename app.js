// Importa o Express
const express = require('express');

// Inicializa o app
const app = express();

// Define a porta em que o servidor vai rodar
const PORT = 3000;

// Define uma rota GET para a URL raiz
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Inicializa o servidor na porta especificada
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
