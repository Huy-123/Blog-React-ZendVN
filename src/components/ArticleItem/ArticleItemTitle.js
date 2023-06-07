// import { Link } from 'react-router-dom';

import { NavLink } from "react-router-dom";

export default function ArticleItemTitle({ title = false, slug, queryStr }) {

  if(!queryStr){
    return (
      <h2 className="article-item__title">
        {title ? (
             <NavLink to={`/post/${slug}`} >
              {title}
             </NavLink>
        ) : (
          <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
            Only Someone Who's Seen The Mummy Will Pass This
          </a>
        )}
      </h2>
  );
  }else{
    // const startHighlightPostion = (title.toLowerCase()).search((queryStr.toLowerCase())) + 1;
    // const endHighlightPostion = (startHighlightPostion + queryStr.length) - 1 ;

    // const firtParagraph = title.slice(0, (startHighlightPostion -1))
    // const lastParagraph = title.slice((endHighlightPostion), title.length + 1 )
    // let midleParagraph = `<span class="search-highlight">${(title.slice((startHighlightPostion - 1), (endHighlightPostion) ))}</span>`

    // let titleHighlight = firtParagraph.concat(midleParagraph);
    // titleHighlight = titleHighlight.concat(lastParagraph);
    // titleHighlight = `<h2>${titleHighlight}</h2>`;

    const highlightSearch = (title) => {
      const regex = new RegExp(`(${queryStr})`, "gi");
      return title.replace(regex,`<mark>$1</mark>`)
    }

    return (
      <h2 className="article-item__title">
        {title ? (
             <NavLink to={`/post/${slug}`} >
              <div dangerouslySetInnerHTML={{ __html:highlightSearch(title)}}></div>
             </NavLink>
        ) : (
          <a href="/only-someone-who's-seen-the-mummy-will-pass-this/">
            Only Someone Who's Seen The Mummy Will Pass This
          </a>
        )}
      </h2>
  );
  }
  
}
