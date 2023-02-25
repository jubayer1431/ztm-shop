import thunk from 'redux-thunk';
import { compose, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistedReducer } from './rootReducer';
import { persistStore } from 'redux-persist';

const middlewares = [
	process.env.NODE_ENV !== 'production' && logger,
	thunk,
].filter(Boolean);
const composedEnhancer = compose(applyMiddleware(...middlewares));
export const store = createStore(persistedReducer, undefined, composedEnhancer);
export const persistor = persistStore(store);
