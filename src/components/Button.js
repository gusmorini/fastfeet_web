import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";
import { FaPlus, FaCheck, FaChevronLeft } from "react-icons/fa";

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

export function SaveButton(props) {
  return (
    <FastButton {...props}>
      <FaCheck />
      {props.children}
    </FastButton>
  );
}

export function ReturnButton(props) {
  return (
    <FastButton background="#CCCCCC" {...props}>
      <FaChevronLeft />
      {props.children}
    </FastButton>
  );
}

const FastButton = styled(Link)`
  background: ${(props) => (props.background ? props.background : "#7d40e7")};
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
    ${(props) =>
      props.background
        ? css`
            background: ${darken(0.05, `${props.background}`)};
          `
        : css`
            background: ${darken(0.05, "#7d40e7")};
          `}
  }
`;
