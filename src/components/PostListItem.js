import React from "react";
import { Link } from "react-router-dom";

export default ({ id, title, author }) => (
  <div>
    <span>
      제목: <Link to={`/posts/${id}`}>{title}</Link>
    </span>
    {`\n`}
    <span>작성자: {author}</span>
  </div>
);
