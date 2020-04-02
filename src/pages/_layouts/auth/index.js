import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired
};

/**
 * estilizações
 */

const Wrapper = styled.div`
  height: 100%;
  background: gray;
`;
