import logo from "./logo.svg";
import "./App.css";
import Cookies from "js-cookie";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false
    };

    this.myRef = React.createRef();
  }

  componentDidMount() {
    if (Cookies.get("ssoTest") === "yes") {
      this.setState({ isAuthenticated: true });
    } else {
      window.addEventListener("message", this.msgHandler);

      setTimeout(() => {
        this.getAuthenticated();
      }, 1);
    }
  }

  getAuthenticated = () => {
    this.myRef.current.contentWindow.postMessage(
      {
        reqType: "getAuthCookie"
      },
      "*"
    );
  };

  createQueryParams = params =>
    Object.keys(params)
      .map(k => `${k}=${encodeURI(params[k])}`)
      .join("&");

  msgHandler = e => {
    if (e.data.hasOwnProperty("authCookieVal")) {
      if (e.data.authCookieVal === "yes") {
        this.setState({ isAuthenticated: true }, () => {
          Cookies.set("ssoTest", "yes");
        });
      } else {
        // get current URL and redirect to login url
        const params = { continue: window.location };
        let redirectURI =
          encodeURI(`${process.env.REACT_APP_LOGIN_ROUTE}`) +
          "?" +
          this.createQueryParams(params);
        window.location = redirectURI;
      }
    }
  };

  render() {
    let { isAuthenticated } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Client1 : Home</h1>
          {isAuthenticated ? (
            ""
          ) : (
            <iframe
              sandbox="allow-same-origin allow-scripts"
              style={{ display: "none" }}
              ref={this.myRef}
              src={`${process.env.REACT_APP_LOGIN_ROUTE}`}
            />
          )}
        </header>
      </div>
    );
  }
}
