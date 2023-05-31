import './post-detail.css'
import PostDetailComments from "./PostDetailComments"
import PostDetailRichText from "./PostDetailRichText"
import PostDetailTags from "./PostDetailTags"

function PostDetailContent({data}) {
  const {img, content, id} = data;
  return (
    <div className="post-detail__content">
      <div className="thumbnail">
        <img src={img} alt="blog-title" />
      </div>
      <div className="content-padding">
        <PostDetailRichText content={content}/>

        <PostDetailTags />
        
        <PostDetailComments id = {id}/>
      </div>
    </div>
  )
}

export default PostDetailContent