import { mappingPostData } from "../../helper";
import categoryService from "../../services/categoryService"

export const ACT_FETCH_ALL_CATEGORIES = 'ACT_FETCH_ALL_CATEGORIES';
export const ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES = 'ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES';

export function actFetchAllCategories(categories){
	return {
		type: ACT_FETCH_ALL_CATEGORIES,
		payload: categories
	}
}


export function actFetchAllSearchPostByCategories({posts, currentPage, totalPage, slug}){
	return {
		type: ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES,
		payload: {
			posts,
			currentPage,
			totalPage,
		}
	}
}




export function actFetchAllCategoriesAsync (){
	return async (dispatch) => {
		const response = await categoryService.getAll();
		dispatch(actFetchAllCategories(response.data))
	}
}



export function actFetchAllSearchPostByCategoriesAsync ({page = 1, slug = "VueJs"}){

	return async (dispatch) => {
		const response = await categoryService.getCategoryBySlug({slug});
		const dataCategoryBySlug = response.data[0];
		const responseSearchCategories = await categoryService.getSearchPostByCategories({page,categories: dataCategoryBySlug.id});
		const totalPage = parseInt(responseSearchCategories.headers['x-wp-totalpages']);
		const posts = responseSearchCategories.data.map(mappingPostData);
		dispatch(actFetchAllSearchPostByCategories({posts: posts[0],currentPage: page, totalPage}))
	}
}