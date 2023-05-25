import axios from "axios";
import API from "./api";

const userService = {
	login: function (data){
		return API.call().post('/jwt-auth/v1/token', data)
	},
	register: function (data){
		return API.call().post('/wp/v2/users/register', data)
	},
	fetchMe: function () {
		return API.callWithToken().get('/wp/v2/users/me');
	  },
}

export default userService;