import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import CategoriesPreviewRoutes from '../CategoriesPreviewRoutes/CategoriesPreviewRoutes';
import CategoryRoutes from '../CategoryRoutes/CategoryRoutes';
import { getCategoriesAndDocs } from './../../utils/Firebase/firebase';
import { setCategories } from './../../store/categories/categoriesAction';

const ShopRoutes = () => {
	// We are using nested routing in this component

	const dispatch = useDispatch();

	useEffect(() => {
		// addCollectionAndDocuments("Categories", SHOP_DATA);

		const getCategoriesMap = async () => {
			const categories = await getCategoriesAndDocs();
			dispatch(setCategories(categories));
		};
		getCategoriesMap();
	}, [dispatch]);
	return (
		<Routes>
			<Route index element={<CategoriesPreviewRoutes />} />
			<Route path={':category'} element={<CategoryRoutes />} />
		</Routes>
	);
};

export default ShopRoutes;
