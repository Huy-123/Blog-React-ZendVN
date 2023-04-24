import {
  ACT_GET_LIST_ARTICLE_GENERAL,
  ACT_GET_LIST_ARTICLE_LASTEST,
  ACT_GET_LIST_ARTICLE_POPULAR,
  ACT_GET_POST_DETAIL_BY_SLUG,
  ACT_GET_LIST_SEARCH_PAGE
} from "./actions";

const initState = {
  listArticleLastest: [],
  listArticlePopular: [],
  listArticleGeneral: {
    list: [],
    currentPage: 1,
    totalPage: 0
  },
  listPostDetailBySlug: [],
  listSearchPage: []
};

function reducer(state = initState, action) {
  switch (action.type) {
    case ACT_GET_LIST_ARTICLE_LASTEST:
      return {
        ...state,
        listArticleLastest: action.payload.posts,
      };
    case ACT_GET_LIST_ARTICLE_POPULAR:
      return {
        ...state,
        listArticlePopular: action.payload.posts,
      };
    case ACT_GET_LIST_ARTICLE_GENERAL:
      return {
        ...state,
        listArticleGeneral: {...state.listArticleGeneral,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          list: action.payload.currentPage === 1 ? action.payload.posts : [...state.listArticleGeneral.list, ...action.payload.posts]
        },
      };
    case ACT_GET_POST_DETAIL_BY_SLUG:
      return {
        ...state,
        listPostDetailBySlug: action.payload.posts,
      };
    case ACT_GET_LIST_SEARCH_PAGE:
      return {
        ...state,
        listSearchPage: action.payload.posts
      }
    default:
      return state;
  }
}

export default reducer;
