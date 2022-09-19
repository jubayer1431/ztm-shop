import React, { useContext } from "react";
import { CategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreviewRoutes = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title, i) => {
        const products = categoriesMap[title];

        return <CategoryPreview key={i} title={title} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreviewRoutes;
