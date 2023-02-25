import React from 'react';
// import { CategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { useSelector } from 'react-redux';
import {
	categoriesSelector,
	isCategoriesLoadingSelector,
} from './../../store/categories/categoriesSelector';
import Loader from '../../components/Loader/Loader';

const CategoriesPreviewRoutes = () => {
	const categoriesMap = useSelector(categoriesSelector);
	const isLoading = useSelector(isCategoriesLoadingSelector);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				categoriesMap &&
				Object.keys(categoriesMap).map((title, i) => {
					const products = categoriesMap[title];

					return <CategoryPreview key={i} title={title} products={products} />;
				})
			)}
		</>
	);
};

export default CategoriesPreviewRoutes;
