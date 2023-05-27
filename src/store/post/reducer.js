import {
  ACT_GET_LIST_ARTICLE_GENERAL,
  ACT_GET_LIST_ARTICLE_LASTEST,
  ACT_GET_LIST_ARTICLE_POPULAR,
  ACT_GET_POST_DETAIL_BY_SLUG,
  ACT_GET_LIST_SEARCH_PAGE,
  ACT_FETCH_ARTICLES_PAGING,
  ACT_GET_POST_RELATED_BY_AUTHOR
} from "./actions";

const initState = {
  listArticleLastest: [],
  listArticlePopular: [],
  listArticleGeneral: {
    list: [],
    currentPage: 1,
    totalPage: 0
  },
  PostDetailBySlug: {},
  listSearchPage: {
    list: [],
    currentPage: 1,
    totalPage: 1
  },
  listRelatedPost: {
    list: []
  },
  // Custom Hook
  listPostsPaging: {
    list: [],
    currentPage: 1,
    totalPage: 1
  }
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
        PostDetailBySlug: action.payload.posts,
      };
    case ACT_GET_LIST_SEARCH_PAGE:
      return {
        ...state,
        listSearchPage: {...state.listSearchPage,
          currentPage: action.payload.currentPage,
          totalPage: action.payload.totalPage,
          list: action.payload.currentPage === 1 ? action.payload.posts : [...state.listSearchPage.list, ...action.payload.posts]
        }
      }
    case ACT_GET_POST_RELATED_BY_AUTHOR:
      return {
        ...state,
        listRelatedPost: {...state.listRelatedPost,
          list: [...action.payload.posts]
        }
      }
      case ACT_FETCH_ARTICLES_PAGING:
        return {
          ...state,
          listPostsPaging: {...state.listPostsPaging,
            currentPage: action.payload.currentPage,
            totalPage: action.payload.totalPage,
            list: action.payload.currentPage === 1 ? action.payload.posts : [...state.listPostsPaging.list, ...action.payload.posts]
          },
        };
    default:
      return state;
  }
}

export default reducer;
