import React from "react";
import { useDispatch } from "react-redux";
import { actFetchCommentAsync } from "../../store/comment/actions";

function CommentParentAction({restTotal, parent, currentPage, postId}) {
  const dispatch = useDispatch();
  const handleLoadMore = () => {
    dispatch(actFetchCommentAsync({ postId, currentPage: currentPage + 1, parent }));

  }
  return (
    <div >
      <p className="load-more-comment"  onClick={handleLoadMore}>
        <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
      </p>
    </div>
  );
}

export default CommentParentAction;
