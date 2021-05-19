import { Route, RouteProps, useHistory } from "react-router-dom";
import React, { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const PrivateRoute: FC<RouteProps> = ({ ...props }) => {
  const history = useHistory();
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    history.replace("/");
    return null;
  }

  return <Route {...props} />;
};
