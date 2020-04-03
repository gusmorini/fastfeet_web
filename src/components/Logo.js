import React from "react";
import styled, { css } from "styled-components";

const url_logo = "img/logo.png";
const text = "fastfeet";

export default function Logo(props) {
  return (
    <Box {...props}>
      <img src={url_logo} alt={`logo_${text}`} />
      <span>{text}</span>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70px;
    height: 44px;
    margin-right: 5px;
  }

  span {
    text-transform: uppercase;
    color: #7d40e7;
    margin-top: 8px;
    font-weight: bold;
    font-style: italic;
    font-size: 33px;
  }

  ${(props) =>
    props.medium &&
    css`
      img {
        width: 50px;
        height: 30px;
      }

      span {
        font-size: 22px;
        margin-top: 3px;
      }
    `};
  ${(props) =>
    props.icon &&
    css`
      span {
        display: none;
      }
    `}
`;
