import React, { useState, useEffect } from 'react';
import '../styles/Table.css'; 

const Tabela = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, []);

 
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/stock"); 
      if (!response.ok) throw new Error("Erro ao buscar produtos");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  
  const removeProduct = async (productId) => {
    try {
      
      const response = await fetch(`http://localhost:5000/stock/${productId}`, {
        method: 'DELETE',  
      });

      if (!response.ok) {
        throw new Error("Erro ao remover produto");
      }

      
      setProducts(products.filter((product) => product.id !== productId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="tabela-container">
      <h2>Tabela de Produtos</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Produto</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>{product.description}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => removeProduct(product.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
