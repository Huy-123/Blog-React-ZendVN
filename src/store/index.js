import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import postReducer from './post/reducer';
import categoryReducer from './category/reducer';
import menuReducer from './menu/reducer';

const rootReducer = combineReducers({
	POST: postReducer,
	CATEGORY: categoryReducer,
	MENU: menuReducer,
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;