import { useParams } from "react-router-dom";
import PostDetailContent from "../components/PostDetail/PostDetailContent";
import PostDetailHead from "../components/PostDetail/PostDetailHead";
import PostDetailSidebar from "../components/PostDetail/PostDetailSidebar";
import { useDispatch, useSelector } from "react-redux";
import { actGetPostDetailBySlugAsync } from "../store/post/actions";
import { useEffect, useState } from "react";
import Loading from "./../components/Loading/index";

function PostDetailPage() {
  const params = useParams();
  const slug = params.slug;
  const dispatch = useDispatch();
  const [waitLoading, setWaitLoading] = useState(false);

  const data = useSelector((state) => state.POST.PostDetailBySlug);

  useEffect(() => {
    dispatch(actGetPostDetailBySlugAsync(slug)).then(() => {
      setWaitLoading(true);
    });
  }, [slug]);

  if (waitLoading === false) {
    return (
      <div className="loading">
        <Loading />
      </div>
    );
  }

  return (
    <main className="post-detail">
      <div className="spacing" />

      <PostDetailHead data={data} />

      <div className="spacing" />

      <div className="post-detail__fluid">
        <div className="tcl-container">
          <div className="post-detail__wrapper">
            <PostDetailContent data={data} />

            <PostDetailSidebar />
          </div>
        </div>
      </div>
    </main>
  );
}

export default PostDetailPage;
