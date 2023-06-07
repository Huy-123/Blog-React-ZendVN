import commentService from "../../services/commentService";

export const ACT_FETCH_COMMENTS_PARENT = "ACT_FETCH_COMMENTS_PARENT";
export const ACT_FETCH_COMMENTS_CHILD = "ACT_FETCH_COMMENTS_CHILD";
export const ACT_POST_NEW_COMMNENT = "ACT_POST_NEW_COMMNENT";

export function actFetchCommentsParent({
  list,
  currentPage,
  totalPages,
  total,
}) {
  return {
    type: ACT_FETCH_COMMENTS_PARENT,
    payload: {
      list,
      currentPage,
      totalPages,
      total,
    },
  };
}

export function actFetchCommentsChild({
  list,
  currentPage,
  total,
  totalPages,
  parent,
}) {
  return {
    type: ACT_FETCH_COMMENTS_CHILD,
    payload: {
      list,
      currentPage,
      total,
      totalPages,
      parent,
    },
  };
}
export function actPostNewComment({ comment }) {
  return {
    type: ACT_POST_NEW_COMMNENT,
    payload: comment,
  };
}

export function actFetchCommentAsync({
  postId = 12,
  currentPage = 1,
  parent = 0,
} = {}) {
  return async (dispatch) => {
    const response = await commentService.getAll({
      post: postId,
      parent,
      page: currentPage,
    });
    const total = Number(response.headers["x-wp-total"]);
    const totalPages = Number(response.headers["x-wp-totalpages"]);

    if (parent === 0) {
      dispatch(
        actFetchCommentsParent({
          list: response.data,
          currentPage,
          totalPages,
          total,
        })
      );
    } else {
      dispatch(
        actFetchCommentsChild({
          list: response.data,
          currentPage,
          totalPages,
          total,
          parent,
        })
      );
    }
  };
}

export function actPostNewCommentAsync(data) {
  return async (dispatch) => {
    const response = await commentService.postNewComment(data);
    dispatch(actPostNewComment({ comment: response.data }));
  };
}
