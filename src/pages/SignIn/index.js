import React from "react";
import styled from "styled-components";

export default function SignIn() {
  return (
    <Container>
      <Title>Fastfeet</Title>

      <form action="#">
        <label htmlFor="">seu e-mail</label>
        <input type="email" placeholder="exemplo@email.com" />

        <label htmlFor="">sua senha</label>
        <input type="password" placeholder="******" />

        <button type="submit">Entrar no sistema</button>
      </form>
    </Container>
  );
}

/** estilizações */

const Container = styled.div`
  background: #ffffff;
  width: 360px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #00000033;
  padding: 40px 30px;

  form {
    display: flex;
    flex-direction: column;

    label {
      color: #444444;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid #dddddd;
      border-radius: 4px;
      background: #ffffff;
      padding: 0 10px;
      line-height: 45px;
      color: #999999;
      margin-bottom: 20px;
    }

    button {
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      line-height: 45px;
      color: #ffffff;
      font-size: 16px;
    }
  }
`;

const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  color: #7d40e7;
  font-style: italic;
  margin-bottom: 20px;
`;
