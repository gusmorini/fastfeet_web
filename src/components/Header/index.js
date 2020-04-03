import React from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const menu = [
    {
      to: "/orders",
      name: "encomendas"
    },
    {
      to: "/deliveryman",
      name: "entregadores"
    },
    {
      to: "/recipient",
      name: "destinatários"
    },
    {
      to: "/problems",
      name: "problemas"
    }
  ];

  return (
    <Container>
      <Content>
        <Logo to="/">fastfeet</Logo>
        <Menu>
          {menu.map(m => (
            <ItemMenu index={m.to} active={m.to === location.pathname && true}>
              <Link to={m.to}>{m.name}</Link>
            </ItemMenu>
          ))}
        </Menu>
        <Usuario>
          <strong>
            <Link to="/">nome usuario</Link>
          </strong>
          <span>
            <Link to="/">sair do sistema</Link>
          </span>
        </Usuario>
      </Content>
    </Container>
  );
}

/** estilo */

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.header`
  width: 100%;
  max-width: 1440px;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  color: #7d40e7;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  text-transform: uppercase;
  border-right: 1px solid #dddddd;
  padding-right: 20px;
  margin-right: 20px;
`;

const Menu = styled.ul`
  display: flex;
  flex: 1;
`;

const ItemMenu = styled.li`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 20px;

  a {
    color: #999999;
  }

  ${props =>
    props.active &&
    css`
      a {
        color: #444444;
      }
    `}
`;

const Usuario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  line-height: 20px;

  strong a {
    color: #666666;
    text-transform: capitalize;
  }

  span a {
    color: #de3b3b;
  }
`;
