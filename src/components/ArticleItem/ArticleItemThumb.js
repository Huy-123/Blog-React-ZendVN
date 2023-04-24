// import { Link } from 'react-router-dom';

export default function ArticleItemThumb({imageThumb = false}) {
  return (
    <div className="article-item__thumbnail">
      <a href="/">
        {imageThumb ? <img  src={imageThumb} /> : <img src="/assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />}
        {/* <img src="/assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" />
        <img src="/assets/images/blog-1.jpg" alt="assets/images/blog-1.jpg" /> */}
      </a>
    </div>
  )
}