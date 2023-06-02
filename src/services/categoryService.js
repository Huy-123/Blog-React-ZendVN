import API from "./api";

const categoryService = {
	getAll: function (inputParams = {}){
		return API.call().get('/wp/v2/categories', {
			params: {
				...inputParams,
				per_page: 100,
				page: 1,
				lang: 'vi'
			}
		})
	},
	getSearchPostByCategories: function (inputParams = {}){
		return API.call().get('/wp/v2/posts', {
			params: {
				...inputParams,
				per_page: 1,
				lang: 'vi'
			}
		})
	},
	getCategoryBySlug: function (inputParams = {}){
		return API.call().get('/wp/v2/categories', {
			params: {
				...inputParams,
				lang: 'vi'
			}
		})
	}
}

export default categoryService;