// import { Link } from 'react-router-dom';

import FuzzyHighlighter, { Highlighter } from 'react-fuzzy-highlighter';

import { NavLink, useHistory } from "react-router-dom";

export default function ArticleItemTitle({ title = false, slug }) {

  return (
      <h2 className="article-item__title">
        {title ? (
             <NavLink to={`/post/:${slug}`} >
              {title}
             </NavLink>
        ) : (
          <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
            Only Someone Who's Seen The Mummy Will Pass This
          </a>
        )}
      </h2>
  );
}
