import "./article-item.css";
import cls from "classnames";
import ArticleItemDesc from "./ArticleItemDesc";
import ArticleItemThumb from "./ArticleItemThumb";
import ArticleItemTitle from "./ArticleItemTitle";
import ArticleItemInfo from "./ArticleItemInfo";
import ArticleItemCategories from "./ArticleItemCategories";
import ArticleItemStats from "./ArticleItemStats";

export default function ArticleItem({
  isStyleRow = false,
  isStyleCard = false,
  isShowDesc = false,
  isShowCategoies = false,
  isShowAvatar = false,
  categories = [],
  queryStr = false,

  data = false,
}) {

  // console.log("data:", data);

  if (!data) return <></>;

  let { img, title, slug, date, authorData, categoryIds, des} = data;


  const classes = cls("article-item", {
    "style-card": isStyleCard,
    "style-row": isStyleRow,
  });


  return (
    
      <article className={classes}>
        <ArticleItemThumb imageThumb={img} />
        <div className="article-item__content">
          {isShowCategoies && <ArticleItemCategories categoryIds = {categoryIds}/>}
          {isShowCategoies && <ArticleItemStats />}

          <ArticleItemTitle title={title} slug={slug} queryStr = {queryStr}/>

          {isShowDesc && des ? (
            <ArticleItemDesc des={des} queryStr = {queryStr} />
          ) : isShowDesc ? (
            <ArticleItemDesc />
          ) : (
            ""
          )}

          <ArticleItemInfo
            date={date}
            imgInfor={img}
            isShowAvatar={isShowAvatar}
            authorName={authorData}
          />
        </div>
      </article>
  );
}
