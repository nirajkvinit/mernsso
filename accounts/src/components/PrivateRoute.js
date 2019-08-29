import React from "react";
import { Route, Redirect } from "react-router-dom";
import { fakeAuth } from "../utils/helpers";

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: `${process.env.REACT_APP_LOGIN_ROUTE}`,
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
