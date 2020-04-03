import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { darken } from "polished";

const itens = [
  {
    to: "/visualizar",
    name: "Visualizar"
  },
  {
    to: "/editar",
    name: "Editar"
  },
  {
    to: "/excluir",
    name: "Excluir"
  }
];

export default function Actions(props) {
  const [visible, setVisible] = useState(false);

  function handleToogleVisible() {
    setVisible(!visible);
  }

  return (
    <ActionsContent>
      <ActionsBtn onClick={handleToogleVisible}>{props.children}</ActionsBtn>
      <ActionsList visible={visible}>
        {itens.map(item => (
          <ActionsItem to={item.to}>{item.name}</ActionsItem>
        ))}
      </ActionsList>
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
  transition: 0.5s;
  z-index: 9000;

  display: ${props => (props.visible ? "flex" : "none")};
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &::before {
    content: "▲";
    font-size: 30px;
    color: #fff;
    position: absolute;
    left: calc(50% - 15px);
    top: -20px;
    /* text-shadow: 0px 0px 2px #00000026; */

    /* border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #fff; */
  }
`;

const ActionsItem = styled(Link)`
  color: #999999;
  font-size: 16px;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 5px;
  margin-bottom: 5px;
  transition: 0.5s;

  &:hover {
    color: ${darken(0.1, "#999999")};
  }

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`;
