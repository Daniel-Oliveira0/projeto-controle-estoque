import React from "react";
import "./RemoveProductModal.css"; 

const RemoveProductModal = ({ isOpen, onClose, onConfirm, product }) => {
  if (!isOpen) return null; 

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Tem certeza que deseja remover este produto?</h2>
        <p><strong>{product?.title}</strong></p>
        <div className="modal-actions">
          <button className="btn" onClick={() => onConfirm(product?.id)}>Sim</button>
          <button className="btn-remove" onClick={onClose}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default RemoveProductModal;
