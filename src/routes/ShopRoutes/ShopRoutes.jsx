import React from "react";
import "./_ShopRoutes.scss";

import { Route, Routes } from "react-router-dom";
import CategoriesPreviewRoutes from "../CategoriesPreviewRoutes/CategoriesPreviewRoutes";
import CategoryRoutes from "../CategoryRoutes/CategoryRoutes";

const ShopRoutes = () => {
  // We are using nested routing in this component
  return (
    <div className={"shop-container"}>
      <Routes>
        <Route index element={<CategoriesPreviewRoutes />} />
        <Route path={":category"} element={<CategoryRoutes />} />
      </Routes>
    </div>
  );
};

export default ShopRoutes;
