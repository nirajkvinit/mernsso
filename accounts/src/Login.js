import "./App.css";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { fakeAuth } from "./utils/helpers";

export default class Login extends Component {
  checkAuth = () => {
    if (fakeAuth.isAuthenticated()) {
      return (
        <Redirect
          to={{
            pathname: `/`,
            state: { from: this.props.location }
          }}
        />
      );
    } else {
      return "";
    }
  };

  render() {
    return (
      <div>
        {this.checkAuth()}
        <h1>Login</h1>
      </div>
    );
  }
}
