import { ACT_LOGIN, ACT_LOGOUT, ACT_UPDATE_CURRENT_USER } from "./actions";

const initState = {
  token: localStorage.getItem("ACCESS_TOKEN"),
  currentUser: null,
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_UPDATE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case ACT_LOGIN:
      localStorage.setItem("ACCESS_TOKEN", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        currentUser: action.payload.currentUser,
      };
    case ACT_LOGOUT:
      localStorage.removeItem("ACCESS_TOKEN");
      return {
        ...state,
        token: null,
        currentUser: null,
      };
    default:
      return state;
  }
}
export default reducer;
