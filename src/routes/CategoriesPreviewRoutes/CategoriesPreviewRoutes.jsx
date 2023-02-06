import React from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import { useSelector } from "react-redux";
import { categoriesSelector } from "./../../store/categories/categoriesSelector";

const CategoriesPreviewRoutes = () => {
  const categoriesMap = useSelector(categoriesSelector);
  return (
    <>
      {categoriesMap && Object.keys(categoriesMap).map((title, i) => {
        const products = categoriesMap[title];

        return <CategoryPreview key={i} title={title} products={products} />;
      })}
    </>
  );
};

export default CategoriesPreviewRoutes;
