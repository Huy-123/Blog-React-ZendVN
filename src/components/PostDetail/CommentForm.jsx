import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actPostNewCommentAsync } from '../../store/comment/actions';

function CommentForm({handleShowForm = false, postId, authorId, parentComment = false, firstTotal = false}) {
  const currentUser = useSelector(state => state.USER.currentUser);
  
  const [textValue, setTextValue] = useState('');

  const dispatch = useDispatch()

  const dataNewComment = {
    author: currentUser?.id,
    content: textValue,
    post: postId,
    parent: (parentComment ? parentComment : 0)
  }

  const handleSubmitForm = () => {
    setTextValue('')
    if(handleShowForm){
      handleShowForm(false)
    }
    
    // dispatch API
    dispatch(actPostNewCommentAsync(dataNewComment, firstTotal))

  }

	return (
		<div className="comments__form">
        <div className="comments__form--control">
          <div className="comments__section--avatar">
            <a href="/">
              <img src="/assets/images/avatar1.jpg" alt="" />
            </a>
          </div>
          <textarea value = {textValue} onChange={(e) => setTextValue(e.target.value)}/>
        </div>
        <div className="text-right">
          <button className="btn btn-default" onClick={handleSubmitForm}>Submit</button>
        </div>
      </div>
	);
}

export default CommentForm;