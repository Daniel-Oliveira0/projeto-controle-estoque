import React from "react";
import { useInventory } from "../context/InventoryContext";
import Header from "../components/Header/Header";
import "../styles/Table.css";

const Tabela = () => {
  const { products, fetchProducts } = useInventory();

  const removeProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${productId}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao remover produto");

      await fetchProducts(); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table-container">
      <Header />
      <h2>Tabela de Produtos</h2>
      <table className="table">
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
                <button className="btn-table" onClick={() => removeProduct(product.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
