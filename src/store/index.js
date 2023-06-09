import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

import postReducer from './post/reducer';
import categoryReducer from './category/reducer';
import menuReducer from './menu/reducer';
import userReducer from './user/reducer';
import commentReducer from './comment/reducer';
import profileReducer from './profile/reducer';

const rootReducer = combineReducers({
	POST: postReducer,
	CATEGORY: categoryReducer,
	MENU: menuReducer,
	USER: userReducer,
	COMMENT: commentReducer,
	PROFILE: profileReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;