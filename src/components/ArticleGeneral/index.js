import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "../ArticleItem";
import Button from "../shared/Button";
import MainTitle from "../shared/MainTitle";
import { actGetListArticleGeneralAsync } from "../../store/post/actions";

function ArticleGeneral() {
  const listArticleGeneral = useSelector(
    (state) => state.POST.listArticleGeneral.list
  );

  const currentPage = useSelector(
    (state) => state.POST.listArticleGeneral.currentPage
  );
  const totalPage = useSelector(
    (state) => state.POST.listArticleGeneral.totalPage
  );
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(actGetListArticleGeneralAsync(currentPage + 1));
  };

  

  return (
    <div className="articles-list section">
      <div className="tcl-container">
        {/* Main Title */}
        <MainTitle btnLabel="Xem them">Bai Viet Tong Hop</MainTitle>
        {/* End Main Title */}
        {/* End Row News List */}
        <div className="tcl-row">
          {listArticleGeneral.map((item) => (
            <div key={item.id} className="tcl-col-12 tcl-col-md-6">
              <ArticleItem isStyleCard data={item} />
            </div>
          ))}
        </div>
        {/* End Row News List */}
        <div className="text-center">
          {currentPage < totalPage && (
            <Button
              type="primary"
              size="large"
              loading={true}
              onClick={handleLoadMore}
            >
              Tải thêm
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ArticleGeneral;
