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
	}
}

export default commentService;