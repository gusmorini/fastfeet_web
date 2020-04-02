import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

export default function Button(props) {
  return <FastButton {...props}>{props.children}</FastButton>;
}

const FastButton = styled(Link)`
  background: #7d40e7;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.5s;

  &:hover {
    background: ${darken(0.05, "#7d40e7")};
  }
`;
