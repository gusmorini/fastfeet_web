import React from "react";

import { SubMenu, BoxButton } from "../../../components/SubMenu";
import Title from "../../../components/Title";
import { SaveButton, ReturnButton } from "../../../components/Button";

import { BoxForm } from "../../../components/Form";

export default function DeliverymanAdd() {
  return (
    <>
      <SubMenu>
        <Title>Cadastro de entregadores</Title>
        <BoxButton>
          <ReturnButton>voltar</ReturnButton>
          <SaveButton>SALVAR</SaveButton>
        </BoxButton>
      </SubMenu>

      <BoxForm>
        {/* adicionar input file */}
        <label htmlFor="">Nome</label>
        <input type="text" placeholder="nome completo" />
        <label htmlFor="">E-mail</label>
        <input type="text" placeholder="exemple@fastfeet.com" />
      </BoxForm>
    </>
  );
}
