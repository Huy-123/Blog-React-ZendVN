import { useEffect } from "react";
import "./comments.css";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCommentAsync } from "../../store/comment/actions";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import CommentAction from "./CommentAction";

function PostDetailComments({ id }) {
  const {
    list,
    currentPage,
    total,
    totalPages,
  } = useSelector((state) => state.COMMENT.dataParentComment);

  const restTotal = total - list.length;

  const postId = id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchCommentAsync({ postId, parent: 0, currentPage: 1 }));
  }, [postId]);
  return (
    <div className="post-detail__comments">
      <CommentForm />

      <p>20 Comments</p>
      {list.length > 0 && (
        <ul className="comments">
          {list.map((item) => {
            return <CommentItem key={item.id} data={item} />;
          })}
          {restTotal > 0 && (
            <CommentAction
              restTotal={restTotal}
              parent={0}
              currentPage={currentPage}
              postId={postId}
            />
          )}
        </ul>
      )}
    </div>
  );
}

export default PostDetailComments;
