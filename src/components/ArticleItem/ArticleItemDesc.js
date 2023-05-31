import { Markup } from 'interweave';
export default function ArticleItemDesc({ des = false, queryStr }) {
  let content = des.replace('<p>', '');
  content = content.replace("</p>", '');

  const highlightSearch = (content) => {
    const regex = new RegExp(`(${queryStr})`, "gi");
    return content.replace(regex,`<mark>$1</mark>`)
  }
  return (
    <>
      {des ? (
        <p className = "des" dangerouslySetInnerHTML={{ __html:highlightSearch(highlightSearch(content))}}></p>
      ) : (
        <p className="article-item__desc">
          Markdown is a lightweight markup language with plain-text-formatting
          syntax. Its design allows it to…
        </p>
      )}
    </>
  );
}
