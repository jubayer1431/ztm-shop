import { createAction } from '../../utils/Reducer/reducer.utils';
import { CATEGORIES_ACTION_TYPES } from './categoriesActionTypes';

export const setCategories = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesMap);
