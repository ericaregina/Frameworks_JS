const express = require('express');
const app = express();
const port = 3000;

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vinda à minha API Express!');
});

// Rota /sobre
app.get('/sobre', (req, res) => {
  res.json({ projeto: 'API simples com Express.js', autora: 'Érica' });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});