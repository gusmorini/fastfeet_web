import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";
import { FaEllipsisH } from "react-icons/fa";

export default function Actions(props) {
  const [visible, setVisible] = useState(false);

  function handleToogleVisible() {
    setVisible(!visible);
  }

  return (
    <ActionsContent>
      <ActionsBtn visible={visible} onClick={handleToogleVisible}>
        <FaEllipsisH />
      </ActionsBtn>
      <ActionsList visible={visible}>{props.children}</ActionsList>
    </ActionsContent>
  );
}

const ActionsContent = styled.div`
  position: relative;
`;

const ActionsBtn = styled.button`
  border: 0;
  background: none;
  font-weight: bold;
  padding-top: 5px;
  transition: all 300ms;
  color: #c6c6c6;

  ${props =>
    props.visible &&
    css`
      color: #7d40e7;
      transform: rotate(90deg);
    `}
`;

const ActionsList = styled.div`
  position: absolute;
  width: 150px;
  left: calc(50% - 75px);
  top: calc(100% + 20px);
  background: #ffffff;
  border-radius: 4px;
  padding: 20px 10px;
  box-shadow: 0px 0px 2px #00000026;
  z-index: 9000;

  display: ${props => (props.visible ? "flex" : "none")};

  align-items: flex-start;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    text-shadow: 0px 0px 2px #00000026;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff;
  }
`;

export const ActionsItem = styled(Link)`
  color: #999999;
  font-size: 16px;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 5px;
  margin-bottom: 5px;
  transition: 0.5s;
  text-align: left;

  width: 100%;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: ${darken(0.1, "#999999")};
  }

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
