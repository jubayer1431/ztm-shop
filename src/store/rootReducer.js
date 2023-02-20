import { combineReducers } from 'redux';
import { userReducer } from './user/userReducer';
import { categoriesReducer } from './categories/categoriesReducer';
import { cartReducer } from './cart/cartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const rootReducer = combineReducers({
	user: userReducer,
	categories: categoriesReducer,
	cart: cartReducer,
});

// redux persisting
const persistConfig = {
	key: 'root',
	storage,
	blackList: ['user'],
};
export const persistedReducer = persistReducer(persistConfig, rootReducer);
