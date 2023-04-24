import API from "./api";

// const postService = {
// 	getLatest: () => {
// 		return API.get('/wp/v2/posts?per_page=3&page=1&lang=vi')
// 	},
// 	getPopular: () => {
// 		return API.get('/wp/v2/posts?per_page=3&page=1&orderby=post_views&lang=vi')
// 	},
// 	getGeneral: (perPage) => {
// 		return API.get(`/wp/v2/posts?per_page=${perPage}&page=1&lang=vi`)
// 	},
// 	getPostDetailBySlug: (slug) => {
// 		return API.get(`/posts?slug=${slug}`)
// 	},
// }

const postService = {
	getAll: function (inputParams = {}){
		return API.get('/wp/v2/posts', {
			params: {
				lang: 'vi',
				...inputParams,
			}
		})
	},
	getLatest: function (){
		return this.getAll({per_page: 3, page: 1})
	},
	getPopular: function (){
		return this.getAll({per_page: 3, page: 1, orderby: 'post_views'})
	},
	getGeneral: function (page = 1){
		return this.getAll({ per_page: 2, page, orderby: 'post_views' });
	},
	getPostDetailBySlug: function(slug){

		return this.getAll({slug:{slug}})

		// return API.get('/wp/v2/posts', {
		// 	params:{
		// 		slug:'cung-nhau-tim-hieu-khai-niem-reactjs-la-gi'
		// 	}
		// })
	},
	getListSearchPage: function(queryStrURI){
		return this.getAll({per_page: 3, page: 1, search: queryStrURI})
	}

}

// '/wp/v2/posts?slug=cung-nhau-tim-hieu-khai-niem-reactjs-la-gi'
export default postService;