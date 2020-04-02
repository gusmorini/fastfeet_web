import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

/**
 * estilizações
 */

const Wrapper = styled.div`
  height: 100%;
  background: sienna;
`;
