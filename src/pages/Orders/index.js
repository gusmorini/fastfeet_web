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
import Actions from "../../components/Actions";

const orders = [
  {
    id: 1,
    product: "Playstation 4 Slim",
    canceled_at: null,
    start_date: null,
    end_date: null,
    recipient: {
      id: 1,
      name: "Gustavo Morini",
      city: "maria helena",
      state: "pr"
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
    start_date: "null",
    end_date: null,
    recipient: {
      id: 1,
      name: "Gustavo Morini",
      city: "maria helena",
      state: "pr"
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
    id: 3,
    product: "Cadeira Gamer Pichau",
    canceled_at: null,
    start_date: "null",
    end_date: "null",
    recipient: {
      id: 2,
      name: "Leonardo Morini",
      city: "maria helena",
      state: "pr"
    },
    deliveryman: {
      id: 1,
      name: "Carlito da silva",
      email: "carlitosilva@fastfeet.com",
      avatar:
        "https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png"
    },
    signature: null
  },
  {
    id: 4,
    product: "Coleção Harry Potter",
    canceled_at: "null",
    start_date: null,
    end_date: null,
    recipient: {
      id: 2,
      name: "Leonardo Morini",
      city: "maria helena",
      state: "pr"
    },
    deliveryman: {
      id: 1,
      name: "Carlito da silva",
      email: "carlitosilva@fastfeet.com",
      avatar:
        "https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png"
    },
    signature: null
  }
];

export default function Orders() {
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
          <ListItem align="center">Estado</ListItem>
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
            let url_avatar = "/img/default-avatar.jpg";

            if (!!order.deliveryman.avatar) {
              url_avatar = order.deliveryman.avatar;
            }

            if (!!order.canceled_at) {
              status = "cancelada";
            } else if (
              !!order.start_date &&
              !order.end_date &&
              !order.canceled_at
            ) {
              status = "retirada";
            } else if (!!order.end_date && !order.canceled_at) {
              status = "entregue";
            }

            return (
              <ListRow>
                <ListItem size="300">{order.id}</ListItem>
                <ListItem>{order.recipient.name}</ListItem>
                <ListItem flex>
                  <ListAvatar src={url_avatar}></ListAvatar>
                  {order.deliveryman.name}
                </ListItem>
                <ListItem>{order.recipient.city}</ListItem>
                <ListItem align="center" upper>
                  {order.recipient.state}
                </ListItem>
                <ListItem size="700" align="center">
                  <Status type={status}>{status}</Status>
                </ListItem>
                <ListItem size="300" align="center">
                  <Actions>...</Actions>
                </ListItem>
              </ListRow>
            );
          })}
      </ListContainer>
    </>
  );
}
