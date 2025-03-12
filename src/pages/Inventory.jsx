import React from "react";
import Card from "../components/Card/Card";

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

    return(
        <div>
            <h2>Estoque de Produtos</h2>
            <div className="product-list">
                {products.map((product) => (
                    <Card key={product.id} title={product.title} description={product.description} />
                ))}
            </div>
        </div>
    )
}

export default Inventory;
