import React, { useState, useEffect } from "react";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import RemoveProductModal from "../components/RemoveProductModal/RemoveProductModal"; 
import '../styles/Inventory.css';

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null); 

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) throw new Error("Erro ao buscar produtos");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      console.log("Dados enviados para o servidor:", newProduct);
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!response.ok) throw new Error("Erro ao adicionar produto");

      const savedProduct = await response.json();
      console.log('Produto adicionado:', savedProduct);

      setProducts((prevProducts) => [...prevProducts, savedProduct]);

    } catch (error) {
      console.error(error);
    }
  };

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

      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
      closeModal(); 

    } catch (error) {
      console.error("Erro ao remover produto", error);
    }
  };

  return (
    <div className="inventory-container">
      <h2>Estoque de Produtos</h2>

      <AddProductForm onAddProduct={addProduct} />

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

      {/* Modal de confirmação */}
      <RemoveProductModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onConfirm={handleConfirmRemove} 
        product={productToRemove} 
      />
    </div>
  );
};

export default Inventory;
