import React from "react";
import Button from "../components/Button/Button";

const Home = () => {
    return (
        <div>
            <h1>Bem-vindo ao Sistema de Estoque!</h1>
            <p>Gerencie os seus produtos de uma forma rápida e eficiente</p>
            <Button label="Acessar Estoque" onClick={() => alert("Botão funcionando")} />
        </div>
    );
};

export default Home;
