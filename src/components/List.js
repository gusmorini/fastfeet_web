import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

export function ListContainer(props) {
  return (
    <ListContainerContant {...props}>{props.children}</ListContainerContant>
  );
}

export function ListRow(props) {
  return <ListRowContent {...props}>{props.children}</ListRowContent>;
}

export function ListItem(props) {
  return <ListItemContent {...props}>{props.children}</ListItemContent>;
}

export function ListAvatar(props) {
  return <Avatar {...props}>{props.children}</Avatar>;
}

ListAvatar.defaultProps = {
  src: "/img/default-avatar.jpg",
};

export function Status(props) {
  return <StatusContent {...props}>{props.children}</StatusContent>;
}

const ListContainerContant = styled.ul``;

const ListRowContent = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;

  background: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  color: #666666;
  font-size: 16px;
  margin-bottom: 10px;

  ${(props) =>
    props.title &&
    css`
      font-weight: bold;
      background: none;
      color: #444444;
    `}
`;

const ListItemContent = styled.span`
  width: 100%;
  padding: 0 10px;

  ${(props) =>
    props.upper &&
    css`
      text-transform: uppercase;
    `}

  ${(props) =>
    props.low &&
    css`
      text-transform: lowercase;
    `};

  ${(props) =>
    props.size &&
    css`
      width: ${props.size + "px"};
    `}

  ${(props) =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
  
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
    `}

`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  background-color: #e1e1e1e1;
`;

const StatusContent = styled.span`
  font-weight: bold;
  font-size: 14px;
  border-radius: 20px;
  padding: 3px 10px;
  text-transform: uppercase;
  display: block;

  &::before {
    content: "●";
    margin-right: 2px;
  }

  color: #c1bc35;
  background: #f0f0df;

  ${(props) =>
    props.type === "entregue" &&
    css`
      color: #2ca42b;
      background: #dff0df;
    `};

  ${(props) =>
    props.type === "cancelada" &&
    css`
      color: #de3b3b;
      background: #fab0b0;
    `};

  ${(props) =>
    props.type === "retirada" &&
    css`
      color: #4d85ee;
      background: #bad2ff;
    `};
`;
