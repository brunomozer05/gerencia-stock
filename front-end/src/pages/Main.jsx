import React from "react";
import {
  Navbar,
  Title,
  Logo,
  TitleText,
  Controller,
  RegisterLink,
  Content1,
  Left1,
  Right1,
  Box,
  Inputs,
  Controller2,
  DuvidaButton,
  SaibaButton,
  Content2,
  Left2,
  Right2,
  Box1,
  Content3,
  Square,
  Left3,
  Mid3,
  Right3,
  BlueInput,
  WhiteInput,
  Bottom,
} from "../components/MainStyle";

const Main = () => {
  return (
    <>
      <Navbar>
        <Title>
          <Logo
            src="https://github.com/brunomozer05/gerencia-stock/blob/main/front-end/public/icon.png?raw=true"
            alt=""
          />
          <TitleText>
            Gerencia<span style={{ color: "#4d5fa9" }}>Stock</span>
          </TitleText>
        </Title>
        <Controller>
          <RegisterLink style={{ color: "Black" ,textDecoration: 'none' }}  href="/dashboard" className="register">
            Registrar
          </RegisterLink>
        </Controller>
      </Navbar>
      <Content1>
        <Left1>
          <p style={{ fontWeight: 700, fontSize: "2.6rem", marginTop: "8rem" }}>
            Elevando sua Eficiência, <br />
            <span style={{ color: "#4d5fa9" }}>Maximizando</span> seus <br />
            Resultados!
          </p>
          <Controller2>
            <DuvidaButton className="duvida">Dúvidas</DuvidaButton>
            <SaibaButton className="saiba">Saiba Mais</SaibaButton>
          </Controller2>
        </Left1>
        <Right1>
          <Box>
            <h1>Login</h1>
            <Inputs>
              Usuário
              <BlueInput type="text" className="blue" />
              Senha
              <WhiteInput type="password" className="white" />
            </Inputs>
            <a href="/dashboard">
            <SaibaButton type="submit">Entrar</SaibaButton>
            </a>
            <p style={{ cursor: "pointer", color: "#4d5fa9", fontWeight: 500 }}>
              Esqueceu o seu usuário ou senha?
            </p>
          </Box>
        </Right1>
      </Content1>
      <Content2>
        <Left2>
          <p>
            Controle total do seu <br />
            estoque com <br />
            facilidade e precisão.
          </p>
        </Left2>
        <Right2>
          <Box1>
            <img src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/f52f3b020c5039021257e72186a693ca483ba217/front-end/public/img1.svg" alt="" />
          </Box1>
        </Right2>
      </Content2>
      <Content3>
        <p>Recursos que impulsionam o seu negócio</p>
        <Square>
          <Left3><Logo src=""></Logo></Left3>
          <Mid3><Logo src=""></Logo></Mid3>
          <Right3><Logo src=""></Logo></Right3>
        </Square>
      </Content3>
      <Bottom>
        <a href="https://github.com/brunomozer05/gerencia-stock">
       <Logo src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png">
       </Logo>
       </a>
      </Bottom>
    </>
  );
};

export default Main;
