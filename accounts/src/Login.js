import "./App.css";
import React, { Component } from "react";

export default class Login extends Component {
  render() {
    console.log("Login Route props:", this.props);
    return (
      <div>
        <h1>Login</h1>
      </div>
    );
  }
}
