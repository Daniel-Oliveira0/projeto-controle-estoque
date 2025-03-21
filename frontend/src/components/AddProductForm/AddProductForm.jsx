import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || !quantity || quantity <= 0) {
            alert("Por favor, preencha todos os campos corretamente!");
            return;
        }

        const newProduct = { title, description, quantity: Number(quantity) };

        try {
            const response = await fetch("http://localhost:5000/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newProduct),
            });

            if (!response.ok) {
                throw new Error("Erro ao adicionar produto");
            }

            const savedProduct = await response.json();
            onAddProduct(savedProduct);
            setTitle("");
            setDescription("");
            setQuantity("");
        } catch (error) {
            console.error(error);
            alert("Erro ao adicionar produto");
        }
    };

    return (
        <div className="add-product-form">
            <h3>Adicionar Produto</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Título:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Descrição:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantidade:</label>
                    <input className="small-input" 
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value >= 1) {
                                setQuantity(value);
                            }
                        }}
                        min="1"
                        required
                    />
                </div>
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
};

export default AddProductForm;
