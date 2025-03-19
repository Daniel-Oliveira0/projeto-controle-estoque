import React, { createContext, useState, useContext } from 'react';

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            title: "Produto 1",
            description: "Descrição do produto 1"
        },
        {
            id: 2,
            title: "Produto 2",
            description: "Descrição do produto 2"
        },
    ]);

    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);
    };

    return (
        <InventoryContext.Provider value={{ products, addProduct }}>
            {children}
        </InventoryContext.Provider>
    );
};

export const useInventory = () => {
    return useContext(InventoryContext);
};