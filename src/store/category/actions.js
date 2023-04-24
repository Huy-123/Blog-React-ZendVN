import categoryService from "../../services/categoryService"

export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES';

export function actFetchAllCategories(categories){
	return {
		type: ACT_FETCH_ALL_CATEGORIES,
		payload: categories
	}
}

export function actFetchAllCategoriesAsync (){
	return async (dispatch) => {
		const response = await categoryService.getAll();
		dispatch(actFetchAllCategories(response.data))
	}
}