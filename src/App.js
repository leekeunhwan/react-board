import React, { Component } from "react";
import "./App.css";
import { UserProvider } from "./contexts/UserContext";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Write from "./components/Write";
import PostPage from "./pages/PostPage";
import PostListPage from "./pages/PostListPage";
import LoginPage from "./pages/LoginPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <UserProvider>
          <Route path="/login" component={LoginPage} />
          <Route path="/posts/:id" component={PostPage} />
          <Route path="/write" component={Write} />
          <Route exact path="/posts" component={PostListPage} />
          <Route exact path="/" component={Home} />
        </UserProvider>
      </BrowserRouter>
    );
  }
}

const Home = () =>
  localStorage.getItem("token") ? (
    <Redirect to="posts" />
  ) : (
    <Redirect to="login" />
  );

export default App;
