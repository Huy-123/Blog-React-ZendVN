import { ACT_UP_LOAD_MEDIA } from "./actions"

const initState = {
	id: 0
}

function reducer(state = initState, action){
	switch(action.type) {
		case ACT_UP_LOAD_MEDIA:
			return {
				...state,
				id: action.payload.id
			}	
		default: 
			return state;
	}
}
export default reducer;