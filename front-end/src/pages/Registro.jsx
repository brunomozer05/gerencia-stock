import {
  LoginTitle,
  Inputs,
  SaibaButton,
  BlueInput,
  WhiteInput,
} from "../components/MainStyle";

import { GlobalStyle, Container } from "../components/RegistroStyle";

const Registro = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LoginTitle>Cadastrar</LoginTitle>
        <Inputs>
          <label htmlFor="user-input">Usuário</label>
          <BlueInput id="user-input" type="text" />

          <label htmlFor="pass-input">Senha</label>
          <WhiteInput id="pass-input" type="password" />
        </Inputs>

        <a
          href="/dashboard"
          style={{ textDecoration: "none", width: "100%", maxWidth: "200px" }}
        >
          <SaibaButton style={{ width: "100%", marginTop: 0 }} type="submit">
            Entrar
          </SaibaButton>
        </a>
      </Container>
    </>
  );
};

export default Registro;
