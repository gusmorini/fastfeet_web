import React from "react";
import styled from "styled-components";

export default function Title({ children }) {
  return <H1>{children}</H1>;
}

const H1 = styled.h1`
  font-size: 24px;
  color: #444444;
  margin-bottom: 20px;
`;
