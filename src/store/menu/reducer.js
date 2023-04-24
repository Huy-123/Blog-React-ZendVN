import { ACT_FETCH_ALL_MENUS } from "./actions";

const initState = {
	menus: []
}

function reducer(state = initState, action){
	switch(action.type) {
		case ACT_FETCH_ALL_MENUS:
			return {
				...state,
				menus: action.payload
			}	
		default: 
			return state;
	}
}
export default reducer;