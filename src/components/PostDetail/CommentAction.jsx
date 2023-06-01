import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actFetchCommentAsync } from "../../store/comment/actions";

function CommentAction({ restTotal, parent, currentPage }) {
  const dispatch = useDispatch();

  const {id} = useSelector((state) => state.POST.PostDetailBySlug
  );

  const handleLoadMore = (e) => {
    e.preventDefault();
    dispatch(
      actFetchCommentAsync({ postId: id, currentPage: currentPage + 1, parent })
    );
  };

  

if(parent === 0){
  return (
    <div >
      <a href="/" onClick={handleLoadMore}>
        <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
      </a>
    </div>
  );
}else{
  return (
    <div className="comments__hidden">
      <a href="/" onClick={handleLoadMore}>
        <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
      </a>
    </div>
  );
}
  

  // if (parent === 0) {
  //   return (
  //     // <div >
  //     //   <p className="load-more-comment"  onClick={handleLoadMore}>
  //     //     <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
  //     //   </p>
  //     // </div>
  //     <div>
  //       <a href="/" onClick={handleLoadMore}>
  //         <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
  //       </a>
  //     </div>
  //   );
  // }else{
  //   <div className="comments__hidden">
  //       <a href="/" onClick={handleLoadMore}>
  //         <i className="icons ion-ios-undo" /> Xem thêm {restTotal} câu trả lời
  //       </a>
  //     </div>
  // }
}

export default CommentAction;
