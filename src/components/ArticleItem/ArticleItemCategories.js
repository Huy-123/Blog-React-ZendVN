// import { Link } from 'react-router-dom';

import { useSelector } from "react-redux";

export default function ArticleItemCategories({ categoryIds }) {

  const categories = useSelector((state) => state.CATEGORY.categories);

  const categoriesChange = categories.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  const categoriesNews = categoriesChange.reduce(
    (list, item) => ({ ...list, [item.id]: item }),
    {}
  );
  
  return (
    categories.length === 0 ? <></> :
    <ul className="article-item__categories">
      {/* <li><a href="/" className="btn btn-category">News</a></li>
      <li><a href="/" className="btn btn-category">News</a></li> */}
      {categoryIds.map((categoryIds) => {
        return (
          <li key = {categoryIds}>
            <a href="/" className="btn btn-category">
              {categoriesNews[categoryIds].name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
