import { createSelector } from 'reselect';

const selectCategoryReducer = (state) => state.categories;

const categorySelector = createSelector(
	// input selectors. output of these selectors will be the arguments of the output selectors numericly
	[selectCategoryReducer],
	// output selectors
	(categorySlice) => {
		console.log(categorySlice.categories);
		return categorySlice.categories;
	}
);

export const categoriesSelector = createSelector(
	[categorySelector],
	// we take care transforation of our business logic in selector file.
	(categories) =>
		categories.reduce((accumulatorObject, categoriesArray) => {
			// title, items are keys in each docs in categories collection inside firestore
			const { title, items } = categoriesArray;
			accumulatorObject[title.toLowerCase()] = items;

			return accumulatorObject;
		}, {})
);
