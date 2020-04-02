import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

import { Link } from "react-router-dom";

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
          <ListaItem size="700">Status</ListaItem>
          <ListaItem size="200" align="right">
            Ações
          </ListaItem>
        </ListaRow>
        <ListaRow>
          <ListaItem size="300">#01</ListaItem>
          <ListaItem>Ludwig van Beethoven</ListaItem>
          <ListaItem>John Doe</ListaItem>
          <ListaItem>Rio do Sul</ListaItem>
          <ListaItem>Santa Catarina</ListaItem>
          <ListaItem size="700">
            <Status>pendente</Status>
          </ListaItem>
          <ListaItem size="200" align="center">
            ...
          </ListaItem>
        </ListaRow>
        <ListaRow>
          <ListaItem size="300">#01</ListaItem>
          <ListaItem>Ludwig van Beethoven</ListaItem>
          <ListaItem>John Doe</ListaItem>
          <ListaItem>Rio do Sul</ListaItem>
          <ListaItem>Santa Catarina</ListaItem>
          <ListaItem size="700">
            <Status type="retirada">retirada</Status>
          </ListaItem>
          <ListaItem size="200" align="center">
            ...
          </ListaItem>
        </ListaRow>
        <ListaRow>
          <ListaItem size="300">#01</ListaItem>
          <ListaItem>Ludwig van Beethoven</ListaItem>
          <ListaItem>John Doe</ListaItem>
          <ListaItem>Rio do Sul</ListaItem>
          <ListaItem>Santa Catarina</ListaItem>
          <ListaItem size="700">
            <Status type="entregue">entregue</Status>
          </ListaItem>
          <ListaItem size="200" align="center">
            ...
          </ListaItem>
        </ListaRow>
        <ListaRow>
          <ListaItem size="300">#01</ListaItem>
          <ListaItem>Ludwig van Beethoven</ListaItem>
          <ListaItem>John Doe</ListaItem>
          <ListaItem>Rio do Sul</ListaItem>
          <ListaItem>Santa Catarina</ListaItem>
          <ListaItem size="700">
            <Status type="cancel">cancelada</Status>
          </ListaItem>
          <ListaItem size="200" align="center">
            ...
          </ListaItem>
        </ListaRow>
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

const ListaRow = styled.li`
  /* display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(7, 1fr); */

  display: flex;
  justify-content: space-between;

  background: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 10px 20px;
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
  color: #c1bc35;
  background: ${lighten(0.3, "#c1bc35")};
  padding: 3px 10px;
  border-radius: 20px;

  ${props =>
    props.type === "entregue" &&
    css`
      color: #2ca42b;
      background: ${lighten(0.3, "#2ca42b")};
    `};

  ${props =>
    props.type === "cancel" &&
    css`
      color: #de3b3b;
      background: ${lighten(0.3, "#de3b3b")};
    `};

  ${props =>
    props.type === "retirada" &&
    css`
      color: #4d85ee;
      background: ${lighten(0.3, "#4d85ee")};
    `};
`;
