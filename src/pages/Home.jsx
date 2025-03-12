import React from "react";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <h2>Bem-vindo ao Sistema de Estoque!</h2>
            <p>Gerencie os seus produtos de uma forma rápida e eficiente</p>
            <Button label="Acessar Estoque" onClick={() => alert("Botão funcionando")} />
        </div>
    );
};

export default Home;
