import React from "react";

const Header = () => {
    return (
        <header>
            <h1>Gerenciamento de Estoque</h1>
            <nav>
                <ul>

                    <li><a href="/">Home</a></li>
                    <li><a href="/inventory">Inventário</a></li>
                    <li><a href="/about">Sobre</a></li>

                </ul>
            </nav>
        </header>
    );
}

export default Header;