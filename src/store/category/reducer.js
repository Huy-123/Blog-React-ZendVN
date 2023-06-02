import {
  ACT_FETCH_ALL_CATEGORIES,
  ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES,
} from "./actions";

const initState = {
  categories: [],
  searchCategories: {
    list: [],
    currentPage: 1,
    totalPage: 9,
  },
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_FETCH_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ACT_FETCH_ALL_SEARCH_POST_BY_CATEGORIES:
      return {
        ...state,
        searchCategories: {
          ...state.searchCategories,
          list:
            action.payload.currentPage === 1
              ? [action.payload.posts]
              : [...state.searchCategories.list, action.payload.posts],
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
        },
      };
    default:
      return state;
  }
}

export default reducer;
