import React from "react";
import PropTypes from "prop-types";

import styled from "styled-components";

import Header from "../../../components/Header";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header></Header>
      <Contend>{children}</Contend>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired
};

/**
 * estilizações
 */

const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
`;

const Contend = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px 30px;
`;
