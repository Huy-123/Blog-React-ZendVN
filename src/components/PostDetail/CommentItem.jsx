import React from "react";
import CommentChildAction from "./CommentChildAction";
import dayjs from "dayjs";


function CommentItem({author_name, date, content, author_avatar_urls}) {
  let Date = date;
  let Time = date;

  if (typeof date === "string") {
    Date = date.slice(0, 11);
  } else {
    Date = date;
  }

  // DayJS
  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)

  Date = dayjs(Date).fromNow()
  return (
    <li className="item">
      <div className="comments__section">
        <div className="comments__section--avatar">
          {/* <a href="/">
            <img src="/assets/images/avatar3.jpg" alt="" />
          </a> */}
          <a href="/">
            <img src={author_avatar_urls[48]} alt="" />
          </a>
        </div>
        <div className="comments__section--content">
          <a href="/" className="comments__section--user">
            {author_name}
          </a>
          <p className="comments__section--time">{Date}</p>
          {/* <p className="comments__section--text" >
          </p> */}
          <div className="comments__section--text" dangerouslySetInnerHTML={{ __html:content.rendered}}>
          </div>
          <i className="ion-reply comments__section--reply"></i>
        </div>
      </div>
	  <CommentChildAction/>
    </li>
  );
}

export default CommentItem;
