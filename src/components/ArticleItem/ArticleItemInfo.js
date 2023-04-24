// import { Link } from 'react-router-dom';
import dayjs from "dayjs";
import ArticleItemAvatar from "./ArticleItemAvatar";

export default function ArticleItemInfo({
  isShowAvatar,
  imgInfor = false,
  date = false,
  authorName = false,
}) {
  let Date = date;
  let Time = date;

  if (typeof date === "string") {
    Date = date.slice(0, 11);
    Time = date.slice(12, 19);
  } else {
    Date = date;
    Time = date;
  }

  // DayJS
  var relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)

  Date = dayjs(Date).fromNow()

  return (
    <div className="article-item__info">
      {
        isShowAvatar && imgInfor ? (
          <ArticleItemAvatar imgInfor={imgInfor} />
        ) : isShowAvatar ? (
          <ArticleItemAvatar />
        ) : (
          ""
        )
        // isShowAvatar && <ArticleItemAvatar />
      }
      <div className="article-item__info-right">
        <div className="article-item__author-name">
          {authorName ? (
            <a href="/">
              <strong>{authorName}</strong>
            </a>
          ) : (
            <a href="/">
              <strong>John Doe</strong>
            </a>
          )}
        </div>
        {date ? (
          <div className="article-item__datetime">
            <div className="date">{Date}</div>
            <div className="time">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="css-uk6cul"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              {Time}
            </div>
          </div>
        ) : (
          <div className="article-item__datetime">
            <div className="date">02/03/2021</div>
            <div className="time">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 512 512"
                className="css-uk6cul"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path>
              </svg>
              1 phút trước
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

{
  /* {date ? (
            <div className="date">{Date}</div>
          ) : (
            <div className="date">02/03/2021</div>
          )} */
}
