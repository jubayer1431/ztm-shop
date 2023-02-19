import React, { createContext, useEffect, useState } from 'react';
import { getCategoriesAndDocs } from '../utils/Firebase/firebase';

export const CategoriesContext = createContext({
	categoriesMap: {},
});

export const CategoriesContextProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categories = await getCategoriesAndDocs();
			setCategoriesMap(categories);
		};
		getCategoriesMap();
	}, []);

	const value = { categoriesMap };

	return (
		<CategoriesContext.Provider value={value}>
			{children}
		</CategoriesContext.Provider>
	);
};
