import React from "react";
import Card from "../components/Card/Card";
import '../styles/Inventory.css';

const Inventory = () => {
    const products = [
        {
            id: 1,
            title: "Produto 1",
            description: "Descrição do Produto 1"
        },
        {
            id: 2,
            title: "Produto 2",
            description: "Descrição do Produto 2"
        },
    ]

    return (
        <div className="inventory-container">
            <h2>Estoque de Produtos</h2>
            <ul className="product-list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Inventory;
