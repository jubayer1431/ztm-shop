import React, { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext({
  productsData: null,
});

export const ProductsContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState(null);
  const value = { productsData };

  useEffect(() => {
    const productsDataEffect = async () => {
      const response = await fetch("shop-data.json");
      const data = await response.json();
      setProductsData(data);
    };

    productsDataEffect();
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
