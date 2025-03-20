import React, { useState, useEffect } from "react";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import '../styles/Inventory.css';

const Inventory = () => {
    const [products, setProducts] = useState([]);

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
            const response = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) throw new Error("Erro ao adicionar produto");

            const savedProduct = await response.json();
            setProducts((prevProducts) => [...prevProducts, savedProduct]); 
        } catch (error) {
            console.error(error);
        }
    };

    const removeProduct = async (id) => {
        try {
            await fetch(`http://localhost:5000/products/${id}`, {
                method: "DELETE",
            });

            setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
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
                        <button className="remove-btn" onClick={() => removeProduct(product.id)}>Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Inventory;
