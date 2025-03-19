import React, { useState } from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import StockModal from "../components/StockModal/StockModal"; 
import "../styles/Home.css";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const toggleModal = () => setIsModalOpen(prevState => !prevState); 

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <Header />
        <div className="content">
          <h1>Bem-vindo ao Sistema de Estoque!</h1>
          <p>Gerencie os seus produtos de uma forma rápida e eficiente</p>
          <Button label="Acessar Estoque" onClick={toggleModal} /> 
        </div>
      </div>

      <StockModal isOpen={isModalOpen} onClose={toggleModal} />
    </div>
  );
};

export default Home;
