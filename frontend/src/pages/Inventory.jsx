import React, { useState } from "react";
import { useInventory } from "../context/InventoryContext";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import RemoveProductModal from "../components/RemoveProductModal/RemoveProductModal";
import "../styles/Inventory.css";

const Inventory = () => {
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
      await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      await fetchProducts(); 
      closeModal();
    } catch (error) {
      console.error("Erro ao remover produto", error);
    }
  };

  return (
    <div className="inventory-container">
      <h2>Estoque de Produtos</h2>
      <AddProductForm />
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Quantidade:</strong> {product.quantity}</p>
            <button className="remove-btn" onClick={() => openModal(product)}>Remover</button>
          </li>
        ))}
      </ul>
      <RemoveProductModal isOpen={isModalOpen} onClose={closeModal} onConfirm={handleConfirmRemove} product={productToRemove} />
    </div>
  );
};

export default Inventory;
