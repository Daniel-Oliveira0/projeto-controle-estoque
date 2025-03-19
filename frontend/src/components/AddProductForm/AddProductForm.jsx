import React, { useState } from "react";

const AddProductForm = ({ onAddProduct }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Please enter title and product");
            return;
        }
        const newProduct = {
            id: Date.now(),
            title,
            description,
        };

        onAddProduct(newProduct);
        setTitle("");
        setDescription("");

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
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
};


export default AddProductForm;


