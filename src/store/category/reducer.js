import { ACT_FETCH_ALL_CATEGORIES } from "./actions";

const initState = {
	categories: []
}

function reducer (state = initState, action){
	switch(action.type) {
		case ACT_FETCH_ALL_CATEGORIES:
			return {
				...state,
				categories: action.payload
			}
		default:
			return state
	}
}

export default reducer;