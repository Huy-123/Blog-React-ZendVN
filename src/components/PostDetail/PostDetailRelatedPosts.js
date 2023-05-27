import { useSelector } from "react-redux"
import ArticleRelated from "../ArticleItem/ArticleRelated"

function PostDetailRelatedPosts() {

  const {list: posts} = useSelector((state) => state.POST.listRelatedPost);


  return (
    <div className="related-post">
      <h2 className="related-post__head">Related Posts</h2>
      {/* <ArticleRelated />
      <ArticleRelated />
      <ArticleRelated /> */}
      {posts.map((item, index) => {
        const {title, authorData, date, slug} = item;
        return (
          <ArticleRelated key={index} title = {title} authorData = {authorData} date = {date} slug = {slug}/>
        )
      })}
    </div>
  )
}

export default PostDetailRelatedPosts