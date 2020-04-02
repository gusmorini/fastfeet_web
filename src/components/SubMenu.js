import React from "react";
import styled from "styled-components";

export function SubMenu({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
