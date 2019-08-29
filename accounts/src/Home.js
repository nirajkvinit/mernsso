import React, { Component, Fragment } from "react";
import "./App.css";

export default class Home extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Fragment>
        <h1>Accounts : Home</h1>
      </Fragment>
    );
  }
}
