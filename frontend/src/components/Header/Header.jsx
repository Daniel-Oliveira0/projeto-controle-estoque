import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/table">Tabela</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
