
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { actFetchArticlesPagingAsync  } from "../store/post/actions";
import Loading from "../components/Loading";
import { usePostsPaging } from "../hooks/usePostsPaging";


function SearchPage() {

  const [loading, setLoading] = useState(false);

 
  const location = useLocation()

  const queryStr = getQueryStr("q", location.search)

  const inputParams = {search: queryStr}

  const dispatch = useDispatch()

  const totalPage = useSelector(
    (state) => state.POST.listPostsPaging.totalPage
  );

  const {posts,renderButtonLoadMore} = usePostsPaging(inputParams)


  useEffect( ()=>{

    setLoading(true)

    // ============= Custom Hook
    dispatch(actFetchArticlesPagingAsync( { inputParams })).then(()=>{
      setLoading(false)
      })
    

  
  },[queryStr])

  if(loading){
    return(
      <div className="loading">
        <Loading/>
      </div>
    )
  }

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {totalPage} kết quả tìm kiếm với từ khóa "<span className="search-highlight">{queryStr}</span>"
          {/* {totalPage} kết quả tìm kiếm với từ khóa "{queryStr}" */}
        </MainTitle>
        <div className="tcl-row tcl-jc-center">

          {posts.map((listSearch) => {
            return (
                <div key={listSearch.id} className="tcl-col-12 tcl-col-md-8">
                  <ArticleItem
                    isShowCategoies
                    isShowDesc
                    isShowAvatar
                    isStyleCard
                    data={listSearch}
                    queryStr = {queryStr}
                  />
                </div>

            );
          })}
          
        </div>

        <div className="text-center">
          {/*  Tải thêm */}
          {renderButtonLoadMore()}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
