import React from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import "../styles/Home.css";

const Home = () => {
    return (
        <div className="home-wrapper">
            <div className="home-container">
                <Header />
                <div className="content">
                    <h1>Bem-vindo ao Sistema de Estoque!</h1>
                    <p>Gerencie os seus produtos de uma forma rápida e eficiente</p>
                    <Button label="Acessar Estoque" onClick={() => alert("Botão funcionando")} />
                </div>
            </div>
        </div>
    );
};

export default Home;
