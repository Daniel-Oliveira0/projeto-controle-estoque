import React, { useState } from "react";
import "./AddProductForm.css";

const AddProductForm = ({ onAddProduct }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          quantity: parseInt(quantity, 10),
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        alert(`Produto já existe: ${data.product.title}`);
      } else if (response.status === 201) {
        onAddProduct(data);
        setTitle("");
        setDescription("");
        setQuantity("");
      }
    } catch (error) {
      alert("Erro ao adicionar produto");
      console.error(error);
    }
  };

  return (
    <form className="add-product-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Título:</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="description">Descrição:</label>
        <input id="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="quantity">Quantidade:</label>
        <input className="small-input" id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button type="submit">Adicionar Produto</button>
    </form>
  );
};

export default AddProductForm;