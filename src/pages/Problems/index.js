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

const problems = [
  {
    id: 1,
    id_encomenda: 1,
    name: "teste problema"
  },
  {
    id: 2,
    id_encomenda: 1,
    name:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enim sed beatae quis nulla labore distinctio consectetur, eligendi odio molestiae natus quas eaque repellendus illo neque sit doloribus. Aut, nemo."
  },
  {
    id: 3,
    id_encomenda: 1,
    name: "teste problema"
  }
];

export default function Problems() {
  return (
    <>
      <Title>Gerenciando Problemas</Title>

      <ListContainer>
        <ListRow title>
          <ListItem size="100"> ID</ListItem>
          <ListItem>Problema</ListItem>
          <ListItem size="500" align="center">
            Ações
          </ListItem>
        </ListRow>

        {problems.length > 0 &&
          problems.map(item => {
            return (
              <ListRow key={item.id}>
                <ListItem size="100">{item.id_encomenda}</ListItem>
                <ListItem>{item.name}</ListItem>
                <ListItem size="500" align="center">
                  <Actions>
                    <ActionsItem to={`/editar/${item.id_encomenda}`}>
                      <FaPen color="#4D85EE" />
                      editar
                    </ActionsItem>
                    <ActionsItem to={`/excluir/${item.id_encomenda}`}>
                      <FaTrashAlt color="#DE3B3B" />
                      cancelar encomenda
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
