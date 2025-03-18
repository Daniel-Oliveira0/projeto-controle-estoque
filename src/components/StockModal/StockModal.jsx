import { useState, useEffect } from "react";
import './StockModal.css';

const StockModal = ({ isOpen, onClose }) => {
  const [addedDate, setAddedDate] = useState("");
  const [removedProducts, setRemovedProducts] = useState([]);

  useEffect(() => {
    if (isOpen) {
      const formattedDate = new Date().toLocaleDateString();
      setAddedDate(formattedDate);
      setRemovedProducts(["Produto A", "Produto B", "Produto C"]);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Informações do Estoque</h2>
        <p><strong>Data de Adição do Produto:</strong> {addedDate}</p>
        <p><strong>Produtos Removidos:</strong></p>
        <ul>
          {removedProducts.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default StockModal;
