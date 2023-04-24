import "./latest-news-list.css";
import ArticleItem from "../ArticleItem";
import MainTitle from "../shared/MainTitle";
import { useSelector } from "react-redux";

function ArticleLatest() {

  const listArticleLatest = useSelector(state => state.POST.listArticleLastest)
  return (
    <div className="latest-news section">
      <div className="tcl-container">
        <MainTitle children="Lastest Articles" />
        <div className="latest-news__list spacing">
          {listArticleLatest.map((item)=>(
            <div key={item.id} className="latest-news__card">
            <ArticleItem isShowAvatar data = {item}/>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticleLatest;
