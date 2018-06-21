import React from "react";

import { PostListProvider } from "../contexts/PostListContext";
import PostListCC from "../containers/PostLIstCC";

export default () => (
  <PostListProvider>
    <PostListCC />
  </PostListProvider>
);
