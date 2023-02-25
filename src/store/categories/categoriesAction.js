import { createAction } from '../../utils/Reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categoriesActionTypes';
import { getCategoriesAndDocs } from './../../utils/Firebase/firebase';

// This is typpical redux way (Sync)
// export const setCategories = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap);

// This is redux thunk way (Async). This pattern is important for other redux sideEffects like redux-saga etc.
const fetchCategoriesStart = () =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

const fetchCategoriesSuccess = (categoriesMap) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesMap);

const fetchCategoriesFailed = (error) =>
	createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesMap = () => async (dispatch) => {
	fetchCategoriesStart();
	try {
		const categories = await getCategoriesAndDocs();
		fetchCategoriesSuccess(categories);
	} catch (error) {
		fetchCategoriesFailed(error);
	}
};
