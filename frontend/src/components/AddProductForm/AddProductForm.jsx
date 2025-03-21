import React, { useState } from "react";
import './AddProductForm.css'; 

const AddProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description || quantity === "") {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        const newProduct = { title, description, quantity: Number(quantity) }; 

        try {
            await onAddProduct(newProduct);
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
                    <input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
};

export default AddProductForm;
