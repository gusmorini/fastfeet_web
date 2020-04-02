import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

import { Link } from "react-router-dom";

const orders = [
  {
    id: 1,
    product: "Headset HyperX",
    canceled_at: null,
    start_date: "0000-00-00",
    end_date: null,
    recipient: {
      id: 1,
      name: "Gustavo Morini"
    },
    deliveryman: {
      id: 1,
      name: "Carlito da silva",
      email: "carlitosilva@fastfeet.com",
      avatar: null
    },
    signature: null
  },
  {
    id: 2,
    product: "Headset HyperX",
    canceled_at: null,
    start_date: null,
    end_date: "0000-00-00",
    recipient: {
      id: 1,
      name: "Gustavo Morini"
    },
    deliveryman: {
      id: 1,
      name: "Carlito da silva",
      email: "carlitosilva@fastfeet.com",
      avatar: null
    },
    signature: null
  }
];

export default function Dashboard() {
  return (
    <>
      <Title>Gerenciando encomendas</Title>
      <SubMenu>
        <SearchInput placeholder="Buscar por encomendas"></SearchInput>
        <Button to="/">+ cadastrar</Button>
      </SubMenu>

      <ListaEncomendas>
        <ListaRow title>
          <ListaItem size="300"> ID</ListaItem>
          <ListaItem>Destinatário</ListaItem>
          <ListaItem>Entregador</ListaItem>
          <ListaItem>Cidade</ListaItem>
          <ListaItem>Estado</ListaItem>
          <ListaItem size="700" align="center">
            Status
          </ListaItem>
          <ListaItem size="300" align="right">
            Ações
          </ListaItem>
        </ListaRow>

        {orders.length > 0 &&
          orders.map(order => {
            let status = "pendente";

            if (!!order.canceled_at) {
              status = "cancelada";
            } else if (!!order.start_date) {
              status = "retirada";
            } else if (!!order.end_date) {
              status = "entregue";
            }

            return (
              <ListaRow>
                <ListaItem size="300">{order.id}</ListaItem>
                <ListaItem>{order.recipient.name}</ListaItem>
                <ListaItem>
                  <ListaAvatar src="/img/default-avatar.jpg"></ListaAvatar>
                  {order.deliveryman.name}
                </ListaItem>
                <ListaItem>Rio do Sul</ListaItem>
                <ListaItem>Santa Catarina</ListaItem>
                <ListaItem size="700" align="center">
                  <Status type={status}>{status}</Status>
                </ListaItem>
                <ListaItem size="300" align="center">
                  ...
                </ListaItem>
              </ListaRow>
            );
          })}
      </ListaEncomendas>
    </>
  );
}

/** estilos */

const Title = styled.h1`
  font-size: 24px;
  color: #444444;
  margin-bottom: 20px;
`;

const SubMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
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

const SearchInput = styled.input`
  font-size: 14px;
  color: #999999;
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 0 20px;
`;

const ListaEncomendas = styled.ul``;

const ListaAvatar = styled.img`
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

const ListaRow = styled.li`
  /* display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(7, 1fr); */

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 10px;
  color: #666666;
  font-size: 16px;
  margin-bottom: 10px;

  ${props =>
    props.title &&
    css`
      font-weight: bold;
      background: none;
      color: #444444;
    `}
`;

const ListaItem = styled.span`
  width: 100%;
  text-align: left;
  padding: 0 10px;

  display: flex;
  align-items: center;

  ${props =>
    props.size &&
    css`
      width: ${props.size + "px"};
    `}

  ${props =>
    props.align &&
    css`
      text-align: ${props.align};
    `}
`;

const Status = styled.span`
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

  ${props =>
    props.type === "entregue" &&
    css`
      color: #2ca42b;
      background: #dff0df;
    `};

  ${props =>
    props.type === "cancelada" &&
    css`
      color: #de3b3b;
      background: #fab0b0;
    `};

  ${props =>
    props.type === "retirada" &&
    css`
      color: #4d85ee;
      background: #bad2ff;
    `};
`;
