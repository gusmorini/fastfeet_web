import React from "react";
import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = false;

  if (!signed && isPrivate) {
    return <Redirect to="/"></Redirect>;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard"></Redirect>;
  }

  return <Route {...rest} component={Component}></Route>;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false
};
