import React, { useState } from "react";
import { useInventory } from "../context/InventoryContext";
import Header from "../components/Header/Header";
import RemoveProductModal from "../components/RemoveProductModal/RemoveProductModal";
import "../styles/Table.css";

const Tabela = () => {
  const { products, fetchProducts } = useInventory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const openModal = (product) => {
    setProductToRemove(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProductToRemove(null);
  };

  const handleConfirmRemove = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Erro ao remover produto");

      await fetchProducts();
      closeModal();
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
                <button className="btn-table" onClick={() => openModal(product)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <RemoveProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirmRemove}
        product={productToRemove}
      />
    </div>
  );
};

export default Tabela;
