import React from "react";
import { UserConsumer } from "../contexts/UserContext";
import LoginForm from "../components/LoginForm";
import { Redirect } from "react-router-dom";

export default class LoginFormCC extends React.Component {
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="posts" />;
    } else {
      return (
        <UserConsumer>
          {({ login }) => (
            <LoginForm
              onLogin={async (username, password) => {
                await login(username, password);
              }}
            />
          )}
        </UserConsumer>
      );
    }
  }
}
