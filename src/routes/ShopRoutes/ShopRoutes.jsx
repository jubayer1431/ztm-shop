import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import CategoriesPreviewRoutes from '../CategoriesPreviewRoutes/CategoriesPreviewRoutes';
import CategoryRoutes from '../CategoryRoutes/CategoryRoutes';

import { fetchCategoriesMap } from './../../store/categories/categoriesAction';

const ShopRoutes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchCategoriesMap());
	}, [dispatch]);

	// We are using nested routing in this component
	return (
		<Routes>
			<Route index element={<CategoriesPreviewRoutes />} />
			<Route path={':category'} element={<CategoryRoutes />} />
		</Routes>
	);
};

export default ShopRoutes;
