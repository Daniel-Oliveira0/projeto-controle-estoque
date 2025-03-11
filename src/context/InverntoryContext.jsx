import React from "react";

const InventoryContext = React.createContext();

export const InventoryProvider = ({ children }) => {
    const products = [
        {
            id: 1,
            title: "Produto 1",
            description: "Descrição do Produto 1"
        },
        {
            id: 2,
            title: "Produto 2",
            description: "Descrição do Produto 2"
        },
    ]

    return(
        <inventoryContext.Provider value={{ products }}>
            {children}
        </inventoryContext.Provider>
    );
};

export const useInventory = () => React.useContext(InventoryContext);