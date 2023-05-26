import Button from "../components/shared/Button";
import ArticleItem from "../components/ArticleItem";
import MainTitle from "../components/shared/MainTitle";
import { getQueryStr } from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { usePostsPaging } from './../hooks/usePostsPaging';

import { actFetchArticlesPagingAsync, actGetSearchPageAsync } from "../store/post/actions";
import Loading from "../components/Loading";
import { usePostsPaging } from "../hooks/usePostsPaging";

// import FuzzyHighlighter, { Highlighter } from 'react-fuzzy-highlighter';

function SearchPage() {

  const [loading, setLoading] = useState(false);

  const data = useSelector((state) => state.POST.listSearchPage.list);
 
  const location = useLocation()

  const queryStr = getQueryStr("q", location.search)

  const inputParams = {search: queryStr}

  const dispatch = useDispatch()

  const currentPage = useSelector(
    (state) => state.POST.listSearchPage.currentPage
  );
  const totalPage = useSelector(
    (state) => state.POST.listSearchPage.totalPage
  );

  const {posts,renderButtonLoadMore} = usePostsPaging(inputParams)



  const handleLoadMore = () => {
    setLoading(true)
    dispatch(actGetSearchPageAsync(queryStr, (currentPage + 1))).then(()=>{
    setLoading(false)
    })
    // dispatch(actFetchArticlesPagingAsync({ page: (currentPage + 1), inputParams})).then(()=>{
    // setLoading(false)
    // })
  };

  // const [waitLoading, setWaitLoading] = useState(false);
  // dùng qeuryStr làm dependensice

  // <ArticleItem isShowCategoies isShowDesc isShowAvatar isStyleCard data={listArticlePopular[0]}/>

  useEffect( ()=>{
    // setWaitLoading(true)
    // dispatch(actGetSearchPageAsync(queryStr)).then(()=>{
    //   setWaitLoading(false)
    //   })

    // ============= Custom Hook
    dispatch(actFetchArticlesPagingAsync( { inputParams })).then(()=>{
      // setWaitLoading(false)
      })
  },[queryStr])

  // if (waitLoading === true) {
  //   return (
  //     <div className="loading">
  //       <Loading/>
  //     </div>
  //   );
  // }
  return (
    <div className="articles-list section">
      <div className="tcl-container">
        <MainTitle type="search">
          {totalPage} kết quả tìm kiếm với từ khóa "{queryStr}"
        </MainTitle>
        <div className="tcl-row tcl-jc-center">
          {/* <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem 
              isStyleCard 
              isShowCategoies 
              isShowAvatar={false} 
              isShowDesc={false} 
            />
          </div>
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem 
              isStyleCard 
              isShowCategoies 
              isShowAvatar={false} 
              isShowDesc={false} 
            />
          </div> */}
          <div className="tcl-col-12 tcl-col-md-8">
            <ArticleItem
              isStyleCard
              isShowCategoies
              isShowAvatar={false}
              isShowDesc={false}
            />
          </div>

          {posts.map((listSearch) => {
            return (
                <div key={listSearch.id} className="tcl-col-12 tcl-col-md-8">
                  <ArticleItem
                    isShowCategoies
                    isShowDesc
                    isShowAvatar
                    isStyleCard
                    data={listSearch}
                  />
                </div>

            );
          })}
          
        </div>

        <div className="text-center">
          {/* {(currentPage < totalPage) && <Button 
            type="primary"
            size="large"
            loading={loading}
            onClick={handleLoadMore}          
          >
            Tải thêm
          </Button>} */}
          {renderButtonLoadMore()}
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
