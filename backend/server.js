const express = require('express');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Teste de servidor');
});

app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost:${port}`);
});
