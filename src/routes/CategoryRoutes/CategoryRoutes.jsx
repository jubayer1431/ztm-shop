import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { CategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from '../../components/ProductCard/ProductCard';
import { CategoryContainer, Title } from './CategoryRoutes.styles';
import {
	categoriesSelector,
	isCategoriesLoadingSelector,
} from './../../store/categories/categoriesSelector';
import Loader from '../../components/Loader/Loader';

const CategoryRoutes = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(categoriesSelector);
	const isLoading = useSelector(isCategoriesLoadingSelector);
	const [products, setProducts] = useState([]);

	// we can use "const products = categoriesMap[DirectoryItem];" instead of useState and useEffect. But, it will be gone if component re-render. that's why we are setting state with useEffect with dependency array of categoriesMap and DirectoryItem (params). So, it will be available after component re-render.

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [categoriesMap, category]);

	return (
		<>
			<Title>{category.toUpperCase()}</Title>
			{isLoading ? (
				<Loader />
			) : (
				<CategoryContainer>
					{/*we have to use safe-guards because our categoriesMap from CategoriesContext
      relies on async code. That's why categoriesMap is empty when components is
      rendered first time. that's why we also used dependency array in useEffect
      hooks.*/}
					{products &&
						products.map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
				</CategoryContainer>
			)}
		</>
	);
};

export default CategoryRoutes;
