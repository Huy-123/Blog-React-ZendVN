// import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ArticleItemCategories({ categoryIds }) {
  const categories = useSelector((state) => state.CATEGORY.categories);

  const dispatch = useDispatch();

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

  return categories.length === 0 ? (
    <></>
  ) : (
    <ul className="article-item__categories">
      {/* <li><a href="/" className="btn btn-category">News</a></li>
      <li><a href="/" className="btn btn-category">News</a></li> */}
      {categoryIds.map((categoryIds) => {
        return (
          <li key={categoryIds}>
            <Link
              className="btn btn-category"
              to={`/category/${categoriesNews[categoryIds].name}`}
            >
              {categoriesNews[categoryIds].name}
            </Link>
            {/* <a href="/" className="btn btn-category" onClick={handleSearchCategories((categoriesNews[categoryIds].name))}>
            </a> */}
          </li>
        );
      })}
    </ul>
  );
}
