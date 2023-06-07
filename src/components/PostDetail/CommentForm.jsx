import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actPostNewCommentAsync } from '../../store/comment/actions';

function CommentForm({handleShowForm = false, postId, authorId, parentComment = false}) {

  const [textValue, setTextValue] = useState('');

  const dispatch = useDispatch()

  const dataNewComment = {
    author: authorId,
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
    dispatch(actPostNewCommentAsync(dataNewComment))

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