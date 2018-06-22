import React from 'react';

import { Redirect } from 'react-router-dom';
import { PostListConsumer } from '../contexts/PostListContext';
import PostListItem from '../components/PostListItem';
import { UserConsumer } from '../contexts/UserContext';
import withAuth from '../hocs/withAuth';

class PostListCC extends React.Component {
  goWrite = () => {
    window.location.replace('/write');
  };
  render() {
    return (
      <PostListConsumer>
        {({ loading, posts }) =>
          loading ? (
            <div>loading...</div>
          ) : (
            <div>
              <h1>게시글 목록</h1>
              {posts.map(post => <PostListItem key={post.id} {...post} />)}
              <p />
              <button onClick={this.goWrite}>글쓰기</button>
              <UserConsumer>
                {value => <button onClick={value.logout}>로그아웃 하기</button>}
              </UserConsumer>
            </div>
          )
        }
      </PostListConsumer>
    );
  }
}

export default withAuth('/login')(PostListCC);
