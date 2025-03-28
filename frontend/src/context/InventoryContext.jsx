import React, { createContext, useState, useContext, useEffect } from "react";

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) throw new Error("Erro ao buscar produtos");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addProduct = async (newProduct) => {
    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        await fetchProducts(); 
      } else {
        console.error("Erro ao adicionar produto");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <InventoryContext.Provider value={{ products, addProduct, fetchProducts }}>
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = () => useContext(InventoryContext);
