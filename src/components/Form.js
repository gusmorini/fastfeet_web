import React from "react";
import styled from "styled-components";

export function BoxForm(props) {
  return <Box>{props.children}</Box>;
}

const Box = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 4px;
  min-height: 200px;
  padding: 30px;

  display: flex;
  flex-direction: column;

  label {
    color: #444444;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    border: 1px solid #dddddd;
    background: #ffffff;
    border-radius: 4px;
    padding: 15px 25px;
    font-size: 16px;
    margin-bottom: 20px;
  }
`;
