import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";

export interface PublicRouteProps extends RouteProps {
  authenticated: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ component: Component, authenticated, ...rest }) => {
  if (!Component) return null;
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
