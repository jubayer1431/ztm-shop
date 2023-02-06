import {compose, applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';

const middlewares = [logger];
const composedEnhancer = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhancer);
