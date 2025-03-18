import React, { useState } from "react";
import Card from "../components/Card/Card";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import '../styles/Inventory.css';

const Inventory = () => {
    const [products, setProducts] = useState([
        { id: 1, title: "Produto 1", description: "Descrição do Produto 1" },
        { id: 2, title: "Produto 2", description: "Descrição do Produto 2" },
    ]);

    const addProduct = (newProduct) => {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
    };

    const removeProduct = (id) => {
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
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
                        <button className="remove-btn" onClick={() => removeProduct(product.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
