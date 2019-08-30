import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../utils/helpers";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        let searchParam = props.location.search ? props.location.search : "";
        return fakeAuth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${process.env.REACT_APP_LOGIN_ROUTE}${searchParam}`,
              state: { from: props.location }
            }}
          />
        );
      }}
    />
  );
}
