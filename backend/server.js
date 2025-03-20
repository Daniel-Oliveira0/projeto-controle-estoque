const express = require('express');
const pool = require('./db'); 

const app = express();
const port = 5000;

app.use(express.json());


app.get('/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao consultar produtos' });
  }
});


app.post('/products', async (req, res) => {
  const { title, description, quantity } = req.body;

  if (!title || !description || quantity === undefined) {
    return res.status(400).json({ message: "Título, descrição e quantidade são obrigatórios" });
  }

  try {
    const query = 'INSERT INTO products (title, description, quantity) VALUES ($1, $2, $3) RETURNING *';
    const values = [title, description, quantity];
    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]); 
  } catch (err) {
    console.error('Erro ao adicionar produto:', err);
    res.status(500).json({ message: "Erro ao adicionar produto" });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost:${port}`);
});
