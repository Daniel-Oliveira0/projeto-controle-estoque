import React, { useState } from "react";
import { useInventory } from "../../context/InventoryContext";
import "./AddProductForm.css";

const AddProductForm = () => {
  const { addProduct } = useInventory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addProduct({
      title,
      description,
      quantity: parseInt(quantity, 10),
    });

    setTitle("");
    setDescription("");
    setQuantity("");
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
      <button className="button-form" type="submit">Adicionar Produto</button>
    </form>
  );
};

export default AddProductForm;
