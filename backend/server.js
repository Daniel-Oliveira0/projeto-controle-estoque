const express = require('express');
const cors = require('cors');
const pool = require('./db'); 

const app = express();
const port = 5000;

app.use(cors());
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

  try {
    const existingProduct = await pool.query(
      'SELECT * FROM products WHERE title = $1',
      [title]
    );

    if (existingProduct.rows.length > 0) {
      return res.status(409).json({ message: 'Produto já cadastrado com esse título.' });
    }

    const newProduct = await pool.query(
      'INSERT INTO products (title, description, quantity) VALUES ($1, $2, $3) RETURNING *',
      [title, description, quantity]
    );

    const addedProduct = newProduct.rows[0];
    console.log('Produto adicionado:', addedProduct);

    res.status(201).json(addedProduct);
  } catch (error) {
    console.error('Erro ao adicionar produto:', error);
    res.status(500).json({ message: 'Erro ao adicionar produto' });
  }
});


app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto deletado com sucesso', deletedProduct: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro ao deletar o produto' });
  }
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, quantity } = req.body;

  try {
    const result = await pool.query(
      'UPDATE products SET title = $1, description = $2, quantity = $3 WHERE id = $4 RETURNING *',
      [title, description, quantity, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    res.status(200).json({ message: 'Produto atualizado com sucesso', product: result.rows[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.listen(port, () => {
  console.log(`Servidor rodando no http://localhost:${port}`);
});
