import { useDispatch, useSelector } from "react-redux";
import ArticleGeneral from "../components/ArticleGeneral";
import ArticleLatest from "../components/ArticleLatest";
import ArticlePopular from "../components/ArticlePopular";
import { useEffect, useState } from "react";
import {
  actFetchArticlesPagingAsync,
  actGetListArticleGeneralAsync,
  actGetListArticleLatestAsync,
  actGetListArticlePopularAsync,
} from "../store/post/actions"; 
import Loading from "./../components/Loading/index";
import "./style/style.css";
import { actFetchAllMenusAsync } from "../store/menu/actions";

function HomePage() {
  const dispatch = useDispatch();
  const [showLoading, setshowLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(true)


  // Loading
  // const [perPage, setPerPage] = useState(2);
  // const handleLoading = () => {
  //   setPerPage(perPage + 2);
  // };
  useEffect(() => {
    dispatch(actGetListArticleLatestAsync());
    dispatch(actGetListArticlePopularAsync());
    // dispatch(actGetListArticleGeneralAsync(perPage)).then((res) => {
    //   const keys = Object.values(res.headers);
    //   const totalPage = keys[1]
    //   if(perPage > totalPage){
    //     setPerPage(totalPage)
    //     setButtonLoading(false)
    //   }
    // });
    
    // dispatch(actGetListArticleGeneralAsync())
    dispatch(actFetchArticlesPagingAsync())
    setshowLoading(false);
  }, []);
  return showLoading === true ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <>
      <ArticleLatest />
      <ArticlePopular />
      <ArticleGeneral  />
    </>
  );
}

export default HomePage;
