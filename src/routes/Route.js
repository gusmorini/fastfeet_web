import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  /** signed define se está logado no sistema */
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/"></Redirect>;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
