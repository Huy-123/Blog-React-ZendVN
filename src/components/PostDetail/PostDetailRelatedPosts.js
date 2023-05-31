import { useSelector } from "react-redux";
import ArticleRelated from "../ArticleItem/ArticleRelated"

function PostDetailRelatedPosts() {
  const {list: listRelatedPost} = useSelector((state) => state.POST.listRelatedPost);

  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {/* <ArticleRelated />
      <ArticleRelated />
      <ArticleRelated /> */}
      { listRelatedPost.map((item) => {
        return(
          <ArticleRelated key={item.id} {...item}/>
        )
      }) }
    </div>
  )
}

export default PostDetailRelatedPosts