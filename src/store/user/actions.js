import userService from "../../services/userService";

export const ACT_LOGIN = 'ACT_LOGIN';
export const ACT_LOGOUT = 'ACT_LOGOUT';
export const ACT_REGISTER = 'ACT_REGISTER';

//Login
export function actLogin(token, currentUser) {
	return {
	  type: ACT_LOGIN,
	  payload: {
		token,
		currentUser
	  },
	};
  }

//Logout
export function actLogout(){
	return{
		type: ACT_LOGOUT,
		payload: null
	}
}


export function actLoginAsync(data) {
	return async (dispatch) => {
	  try {
		const response = await userService.login(data);
		// lấy thông tin user vừa đăng nhập
		const token = response.data.token;

		dispatch(actFetchMeAsync(token))
		return {	
		  ok: true,
		};
	  } catch (error) {
		return {
		  ok: false,
		  error: 'thong tin dang nhap chua dung',
		};
	  }
	};
  }


  // actFecthMeAsync
  export const actFetchMeAsync = (token) => {
	return async (dispatch) => {
		try{
			if(!token){
				token = localStorage.getItem('ACCESS_TOKEN')
			}else{
				localStorage.setItem('ACCESS_TOKEN', token)
			}
			const responseMe = await userService.fetchMe();

			const currentUser = responseMe.data

			dispatch(actLogin(token, currentUser))


		}
		catch(error){
			dispatch(actLogout())
		}
	}
  }


// Register
export function actRegisterAsync (data){
	return async (dispatch) => {
		try{
			const response = await userService.register(data);
			return({
				ok: true,
				status: response.data.status
			})
		}
		catch (error) {
			return ({
				ok: false,
				error: "Sorry, that username already exists!"
			})
		}
	}
}
