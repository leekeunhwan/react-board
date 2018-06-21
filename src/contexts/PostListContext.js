import React from "react";
import boardAPI from "../boardAPI";

const { Provider, Consumer } = React.createContext();

class PostListProvider extends React.Component {
  state = {
    loading: false,
    posts: []
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const res = await boardAPI.get(`posts?_expand=user`);
      this.setState({
        posts: res.data.map(post => ({
          id: post.id,
          title: post.title,
          author: post.user.username
        }))
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const value = {
      loading: this.state.loading,
      posts: this.state.posts
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { PostListProvider, Consumer as PostListConsumer };
