
export default function ArticleItemAvatar({imgInfor = false}) {
  return (
    <div className="article-item__author-image">
      <a aria-label="John Doe" href="/">
        {imgInfor ? <img src = {imgInfor} alt="john-doe" /> : <img src="assets/images/john-doe.png" alt="john-doe" /> }
        
      </a>
    </div>
  )
}