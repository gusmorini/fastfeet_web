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
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";

import Actions, { ActionsItem } from "../../components/Actions";

const recipient = [
  {
    id: 1,
    name: "Gustavo Morini",
    street: "rua progresso",
    number: "901",
    complement: "portão grade branca",
    state: "pr",
    city: "maria helena",
    zip_code: "87480000",
    createdAt: "2020-04-01T20:54:57.000Z",
    updatedAt: "2020-04-01T20:55:08.000Z"
  },
  {
    id: 2,
    name: "Leonardo Morini",
    street: "rua piedade",
    number: "1791",
    complement: "casa verde",
    state: "pr",
    city: "maria helena",
    zip_code: "87480000",
    createdAt: "2020-04-01T20:55:02.000Z",
    updatedAt: "2020-04-01T20:55:02.000Z"
  }
];

export default function Recipient() {
  return (
    <>
      <Title>Gerenciando Destinatários</Title>
      <SubMenu>
        <SearchInput placeholder="Buscar por destinatário"></SearchInput>

        <Button to="/">+ cadastrar</Button>
      </SubMenu>

      <ListContainer>
        <ListRow title>
          <ListItem size="100"> ID</ListItem>
          <ListItem>Nome</ListItem>
          <ListItem>Endereço</ListItem>
          <ListItem size="500" align="center">
            Ações
          </ListItem>
        </ListRow>

        {recipient.length > 0 &&
          recipient.map(item => {
            const end = `${item.street}, ${item.number}, ${item.city} - ${item.state}`;

            return (
              <ListRow>
                <ListItem size="100">{item.id}</ListItem>
                <ListItem>{item.name}</ListItem>
                <ListItem>{end}</ListItem>
                <ListItem size="500" align="center">
                  <Actions>
                    <ActionsItem to={`/editar/${item.id}`}>
                      <FaPen color="#4D85EE" />
                      editar
                    </ActionsItem>
                    <ActionsItem to={`/excluir/${item.id}`}>
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
