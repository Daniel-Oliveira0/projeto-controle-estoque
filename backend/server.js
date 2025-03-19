const express = require('express');
const pool = require('./db'); 

const app = express();
const port = 5000;


app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.status(200).json(result.rows);  
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao consultar produtos' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost:${port}`);
});
