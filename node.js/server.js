const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const html = `
      <html>
        <head><title>Meu Servidor Node</title></head>
        <body><h1>Bem-vinda, Érica!</h1></body>
      </html>`;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
  } else if (req.url === '/sobre') {
    const info = { projeto: 'Servidor Node.js', autora: 'Érica' };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(info));
  } else {
    res.writeHead(404);
    res.end('Página não encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});