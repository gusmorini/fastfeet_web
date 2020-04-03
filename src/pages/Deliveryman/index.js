import React from "react";

import {
  ListContainer,
  ListRow,
  ListItem,
  ListAvatar,
  Status
} from "../../components/List";

import { FaTrashAlt, FaPen } from "react-icons/fa";

import { SubMenu } from "../../components/SubMenu";
import Title from "../../components/Title";
import { AddButton } from "../../components/Button";
import SearchInput from "../../components/SearchInput";

import Actions, { ActionsItem } from "../../components/Actions";

const deliveryman = [
  {
    id: 1,
    name: "Carlito da silva",
    email: "carlitosilva@fastfeet.com",
    avatar: null
  },
  {
    id: 2,
    name: "Carlito da silva",
    email: "carlitosilva@fastfeet.com",
    avatar: null
  },
  {
    id: 3,
    name: "Carlito da silva",
    email: "carlitosilva@fastfeet.com",
    avatar: null
  }
];

export default function Deliveryman() {
  return (
    <>
      <Title>Gerenciando entregadores</Title>
      <SubMenu>
        <SearchInput placeholder="Buscar por entregadores"></SearchInput>

        <AddButton to="/">cadastrar</AddButton>
      </SubMenu>

      <ListContainer>
        <ListRow title>
          <ListItem size="100"> ID</ListItem>
          <ListItem align="center">Foto</ListItem>
          <ListItem>Nome</ListItem>
          <ListItem>Email</ListItem>
          <ListItem size="500" align="center">
            Ações
          </ListItem>
        </ListRow>

        {deliveryman.length > 0 &&
          deliveryman.map(del => {
            return (
              <ListRow>
                <ListItem size="100">{del.id}</ListItem>
                <ListItem align="center">
                  <ListAvatar
                    src={del.avatar !== null ? del.avatar : undefined}
                  />
                </ListItem>
                <ListItem>{del.name}</ListItem>
                <ListItem low>{del.email}</ListItem>
                <ListItem size="500" align="center">
                  <Actions>
                    <ActionsItem to={`/editar/${del.id}`}>
                      <FaPen color="#4D85EE" />
                      editar
                    </ActionsItem>
                    <ActionsItem to={`/excluir/${del.id}`}>
                      <FaTrashAlt color="#DE3B3B" />
                      excluir
                    </ActionsItem>
                  </Actions>
                </ListItem>
              </ListRow>
            );
          })}
      </ListContainer>
    </>
  );
}
