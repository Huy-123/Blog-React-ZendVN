import { Markup } from 'interweave';
export default function ArticleItemDesc({ des = false }) {
  let content = des.replace('<p>', '');
  content = content.replace("</p>", '');
  return (
    <>
      {des ? (
        // <div>ReactHtmlParser(content)</div>
        // <Markup content={des} />
        <p className = "des">{content}</p>
      ) : (
        <p className="article-item__desc">
          Markdown is a lightweight markup language with plain-text-formatting
          syntax. Its design allows it to…
        </p>
      )}
    </>
  );
}
