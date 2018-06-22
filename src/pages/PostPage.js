import React from 'react';

import { PostProvider } from '../contexts/PostContext';
import PostCC from '../containers/PostCC';

export default ({ match }) => (
  <PostProvider id={match.params.id}>
    <PostCC />
  </PostProvider>
);
