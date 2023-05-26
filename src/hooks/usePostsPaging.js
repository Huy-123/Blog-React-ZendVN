import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Button from './../components/shared/Button/index';
import { actFetchArticlesPagingAsync } from "../store/post/actions";

export function usePostsPaging(inputParams = {}) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const {
    list: posts,
    currentPage,
    totalPage,
  } = useSelector((state) => state.POST.listPostsPaging);

  const hasMorePost = currentPage < totalPage;

  const handleLoadMore = () => {
    setLoading(true);
    dispatch(actFetchArticlesPagingAsync({page: currentPage + 1, inputParams})).then(() => {
      setLoading(false);
    });
  };

  function renderButtonLoadMore() {
    return (
      hasMorePost && (
        <Button
          type="primary"
          size="large"
          loading={loading}
          onClick={handleLoadMore}
        >
          Tải thêm
        </Button>
      )
    );
  }

  return {
	posts,
	renderButtonLoadMore
  };
}
