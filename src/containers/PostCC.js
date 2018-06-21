import React from "react";

import { PostConsumer } from "../contexts/PostContext";
import Post from "../components/Post";

export default class PostCC extends React.Component {
  render() {
    return (
      <PostConsumer
        children={({ title, body, author, loading }) =>
          loading ? (
            <div>loading...</div>
          ) : (
            <Post title={title} body={body} author={author} />
          )
        }
      />
    );
  }
}
