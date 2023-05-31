import { useEffect } from "react";
import "./comments.css";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCommentAsync } from "../../store/comment/actions";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import CommentParentAction from "./CommentParentAction";

function PostDetailComments({ id }) {
  const { list: comments, currentPage, total, totalPages } = useSelector(
    (state) => state.COMMENT.dataParentComment
  );
  
  const restTotal = total - comments.length;

  const postId = id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchCommentAsync({ postId }));
  }, []);
  return (
    <div className="post-detail__comments">
      <CommentForm />

      <p>20 Comments</p>
      <ul className="comments">
        {comments.map((item) => {
          return <CommentItem {...item}/>;
        })}
        {restTotal > 0 && <CommentParentAction restTotal = {restTotal} parent = {0} currentPage={currentPage} postId = {postId} /> }
      </ul>
    </div>
  );
}

export default PostDetailComments;
