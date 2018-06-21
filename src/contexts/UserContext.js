import React from "react";
import boardAPI from "../boardAPI";

const { Provider, Consumer } = React.createContext();

class UserProvider extends React.Component {
  login = async (username, password) => {
    try {
      const res = await boardAPI.post("users/login", {
        username: username,
        password: password
      });
      localStorage.setItem("token", res.data.token);
      this.props.onLogin();
    } catch (e) {
      if (e.response) {
        if (e.response.status === 400) {
          alert("아이디와 비밀번호를 다시 확인해주십시요");
        }
      }
      window.location.reload();
    }
  };

  logout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };

  render() {
    const value = {
      login: this.login,
      logout: this.logout
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
