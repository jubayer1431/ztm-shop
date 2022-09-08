import React, { useContext } from "react";
import "./_ShopRoutes.scss";

import { ProductsContext } from "../../contexts/productsContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const ShopRoutes = () => {
  const { productsData } = useContext(ProductsContext);

  console.log("productsData", productsData);
  return (
    <div className={"products-container"}>
      {productsData?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ShopRoutes;
