// import { Link } from 'react-router-dom';

import { NavLink } from "react-router-dom";

export default function ArticleItemTitle({ title = false, slug }) {
  return (
    <NavLink to={`/post/:${slug}`} >
      <h2 className="article-item__title">
        {title ? (
          <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
            {title}
          </a>
        ) : (
          <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
            Only Someone Who's Seen The Mummy Will Pass This
          </a>
        )}
      </h2>
    </NavLink>
  );
}
