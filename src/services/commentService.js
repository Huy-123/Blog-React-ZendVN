import API from './api';

const commentService = {
	getAll: function (inputParams = {}){
		return API.call().get('/wp/v2/comments', {
			params:{
				...inputParams,
				lang: 'vi',
        		order: 'asc',
        		per_page: 3
			}
		})
	},
	postNewComment: function (data){
		return API.callWithToken().post('/wp/v2/comments', data)
	},
}

export default commentService;