import React from "react";

import {
  ListContainer,
  ListRow,
  ListItem,
  ListAvatar,
  Status
} from "../../components/List";
import { SubMenu } from "../../components/SubMenu";
import Title from "../../components/Title";
import Button from "../../components/Button";
import SearchInput from "../../components/SearchInput";

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

      <ListContainer>
        <ListRow title>
          <ListItem size="300"> ID</ListItem>
          <ListItem>Destinatário</ListItem>
          <ListItem>Entregador</ListItem>
          <ListItem>Cidade</ListItem>
          <ListItem>Estado</ListItem>
          <ListItem size="700" align="center">
            Status
          </ListItem>
          <ListItem size="300" align="right">
            Ações
          </ListItem>
        </ListRow>

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
              <ListRow>
                <ListItem size="300">{order.id}</ListItem>
                <ListItem>{order.recipient.name}</ListItem>
                <ListItem>
                  <ListAvatar src="/img/default-avatar.jpg"></ListAvatar>
                  {order.deliveryman.name}
                </ListItem>
                <ListItem>Rio do Sul</ListItem>
                <ListItem>Santa Catarina</ListItem>
                <ListItem size="700" align="center">
                  <Status type={status}>{status}</Status>
                </ListItem>
                <ListItem size="300" align="center">
                  ...
                </ListItem>
              </ListRow>
            );
          })}
      </ListContainer>
    </>
  );
}
