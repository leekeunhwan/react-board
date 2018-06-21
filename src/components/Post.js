import React from "react";
import { PostConsumer } from "../contexts/PostContext";

export default ({ title, body, author }) => (
  <PostConsumer>
    {value => (
      <div>
        <h1>{title}</h1>
        <div>작성자: {author}</div>
        <div>{body}</div>
        <button onClick={value.goback}>뒤로가기</button>
        <button>수정하기</button>
        <button onClick={value.delete}>삭제하기</button>
      </div>
    )}
  </PostConsumer>
);
