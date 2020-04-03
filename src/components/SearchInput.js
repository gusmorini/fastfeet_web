import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Box = styled.div`
  font-size: 14px;
  color: #999999;
  border: 1px solid #dddddd;
  border-radius: 4px;
  width: 100%;
  max-width: 237px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0px 10px;

  input {
    background: none;
    border: none;
    color: #999999;
    padding-left: 10px;
    width: 100%;
  }
`;

export default function SearchInput(props) {
  return (
    <Box>
      <FaSearch />
      <input {...props}>{props.children}</input>
    </Box>
  );
}
