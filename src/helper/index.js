
export function getQueryStr(name, searchLocation) {
  return new URLSearchParams(searchLocation).get(name)
}

export const mappingPostData = (item) => {
  return {
    id: item.id,
    title: item.title.rendered,
    img: item.featured_media_url,
    slug: item.slug,
    date: item.date,
    authorData: item.author_data.nickname,
    content: item.content.rendered,
    categoryIds: item.categories,
    des: item.excerpt.rendered,
    authorId: item.author
  };
};

export function mappingMenuData(item){
  return {
    id: item.ID,
    title: item.title,
    childItems: item.child_items ? item.child_items.map(mappingMenuData) : []
  }
}