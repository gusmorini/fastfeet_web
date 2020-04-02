import React from "react";
import styled from "styled-components";

export default function SearchInput(props) {
  return <Search {...props}>{props.children}</Search>;
}

const Search = styled.input`
  font-size: 14px;
  color: #999999;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 0 20px;
`;
