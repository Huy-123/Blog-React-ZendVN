function PostDetailHead({ data }) {
  const { title, authorData, date } = data;

  let Date = date;

  if (typeof date === "string") {
    Date = date.slice(0, 11);
  } else {
    Date = date;
  }
  return (
    <div className="post-detail__head">
      <div className="tcl-container">
        <h1 className="post-detail__title">{title}</h1>
        <ul className="post-detail__info">
          <li className="item author">
            By{" "}
            <a href="/">
              <strong>{authorData}</strong>
            </a>
          </li>
          <li className="item date">{Date}</li>
          <li className="item views">
            2 <i className="icons ion-ios-eye" />
          </li>
          <li className="item comments">
            20 <i className="icons ion-ios-chatbubble" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostDetailHead;
