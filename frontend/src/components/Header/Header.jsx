import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/inventory">Inventário</a></li>
                    <li><a href="/about">Sobre</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
