import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";
import { FaPlus } from "react-icons/fa";

export default function Button(props) {
  return <FastButton {...props}>{props.children}</FastButton>;
}

export function AddButton(props) {
  return (
    <FastButton {...props}>
      <FaPlus />
      {props.children}
    </FastButton>
  );
}

const FastButton = styled(Link)`
  background: #7d40e7;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  padding: 10px 20px;
  transition: 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;

  svg {
    margin-right: 5px;
    font-size: 10px;
  }

  &:hover {
    background: ${darken(0.05, "#7d40e7")};
  }
`;
