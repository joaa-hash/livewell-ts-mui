import React from "react";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { CircularProgress } from "@material-ui/core";

export const ProtectedRoute = ({ component, ...args }: any) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <div style={{ margin: "100px auto 0", textAlign: "center" }}>
          <CircularProgress />
        </div>
      ),
    })}
    {...args}
  />
);
