
import postService from '../../services/postService';
import { mappingPostData } from './../../helper/index';

export const ACT_GET_LIST_ARTICLE_LASTEST = 'ACT_GET_LIST_ARTICLE_LASTEST';
export const ACT_GET_LIST_ARTICLE_POPULAR = 'ACT_GET_LIST_ARTICLE_POPULAR';
export const ACT_GET_LIST_ARTICLE_GENERAL = 'ACT_GET_LIST_ARTICLE_GENERAL';
export const ACT_GET_POST_DETAIL_BY_SLUG = 'ACT_GET_POST_DETAIL_BY_SLUG';
export const ACT_GET_LIST_SEARCH_PAGE = 'ACT_GET_LIST_SEARCH_PAGE';
export const ACT_GET_POST_RELATED_BY_AUTHOR = 'ACT_GET_POST_RELATED_BY_AUTHOR';

export const ACT_FETCH_ARTICLES_PAGING = 'ACT_FETCH_ARTICLES_PAGING';

// REDUX ACTION CREATOR
export function actGetListArticleLatest(posts) {
	return {
	  type: ACT_GET_LIST_ARTICLE_LASTEST,
	  payload: {
		posts,
	  },
	};
  }
export function actGetListArticlePopular(posts) {
	return {
	  type: ACT_GET_LIST_ARTICLE_POPULAR,
	  payload: {
		posts,
	  },
	};
  }
export function actGetListArticleGeneral(posts, currentPage, totalPage) {
	return {
	  type: ACT_GET_LIST_ARTICLE_GENERAL,
	  payload: {
		posts,
		currentPage,
		totalPage
	  },
	};
  }

  export function actGetPostDetailBySlug(posts){
	return {
		type: ACT_GET_POST_DETAIL_BY_SLUG,
		payload: {
			posts
		}
	}
  }

  export function actGetSearchPage(posts, currentPage, totalPage){
	return {
		type: ACT_GET_LIST_SEARCH_PAGE,
		payload: {
			posts,
			currentPage,
			totalPage
		  },
	}
  }

  // ==== Custom Hook=========================================================

  const actFetchArticlesPaging = ({posts, currentPage, totalPage}) => {
	return {
		type: ACT_FETCH_ARTICLES_PAGING,
		payload: {
			posts,
			currentPage,
			totalPage,
		}
	}
  }

//============================================================================

export function actGetListRelatedPostByAuthor(posts){
	return {
		type: ACT_GET_POST_RELATED_BY_AUTHOR,
		payload: {
			posts
		}
	}
  }

  










// THUNK ACTION CREATOR
export function actGetListArticleLatestAsync(){
	return async (dispatch) => {
		const response = await postService.getLatest();
		 const posts = response.data.map(mappingPostData)
		 dispatch(actGetListArticleLatest(posts))
	}
}

export function actGetListArticlePopularAsync(){
	return async (dispatch) => {
		const response = await postService.getPopular();
		 const posts = response.data.map(mappingPostData)
		 dispatch(actGetListArticlePopular(posts))
	}
}

export function actGetListArticleGeneralAsync(page = 1){
	return async (dispatch) => {
		const response = await postService.getGeneral(page);
		const totalPage = parseInt(response.headers['x-wp-totalpages']);
		 const posts = response.data.map(mappingPostData)
		 dispatch(actGetListArticleGeneral(posts, page, totalPage))
	}
}

export function actGetPostDetailBySlugAsync(slug){
	return async (dispatch) => {
		const response = await postService.getPostDetailBySlug(slug);
		const posts = response.data.map(mappingPostData);
		const responseRelated = await postService.getListRelatedPost({authorId: posts[0].authorId, id:posts[0].id});
		const postsRelated = responseRelated.data.map(mappingPostData);
		 dispatch(actGetPostDetailBySlug(posts[0]))
		dispatch(actGetListRelatedPostByAuthor(postsRelated));
	}
}

export function actGetSearchPageAsync(queryStrURI, page = 1){
	return async (dispatch) => {
		const response = await postService.getListSearchPage(queryStrURI, page);
		const totalPage = parseInt(response.headers['x-wp-totalpages']);
		const posts = response.data.map(mappingPostData);
		dispatch(actGetSearchPage(posts, page, totalPage))
	}
}


// ==== Custom Hook================================================
export function actFetchArticlesPagingAsync ( { page = 1, inputParams = {} } = {}){
	return async (dispatch) => {
		try{
			const response = await postService.getPaging({page, inputParams})
			const totalPage = parseInt(response.headers['x-wp-totalpages']);
			const posts = response.data.map(mappingPostData);
			dispatch(actFetchArticlesPaging({posts, currentPage: page, totalPage}))
		}
		catch(error){

		}
	}
}
