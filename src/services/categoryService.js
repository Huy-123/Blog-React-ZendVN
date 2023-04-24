import API from "./api";

const categoryService = {
	getAll: function (inputParams = {}){
		return API.get('/wp/v2/categories', {
			params: {
				...inputParams,
				per_page: 100,
				page: 1,
				lang: 'vi'
			}
		})
	}
}

export default categoryService;