import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./components/PrivateRoute";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
          </Router>
        </header>
      </div>
    );
  }
}
