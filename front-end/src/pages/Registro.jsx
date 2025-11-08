import { useState } from "react";
import axios from "axios";
import {
  LoginTitle,
  Inputs,
  SaibaButton,
  BlueInput,
  WhiteInput,
} from "../components/MainStyle";

import { GlobalStyle, Container, Button } from "../components/RegistroStyle";

const Registro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.nome || !formData.email || !formData.senha) {
      return setError("Por favor, preencha todos os campos.");
    }

    try {
      await axios.post("http://localhost:8080/auth/signup", formData);

      setSuccess("Registro realizado com sucesso! Você pode fazer login agora.");

    } catch (err) {
      setError(err.response?.data || "Ocorreu um erro ao registrar.");
    }
  };

  const handleLoginRedirect = () => {
    window.location.href = "/main";
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <LoginTitle>Cadastrar</LoginTitle>

        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "330px" }}>
          <Inputs>
            <label htmlFor="user-input">Nome de Usuário</label>
            <BlueInput
              id="user-input"
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
            />

            <label htmlFor="email-input">Email</label>
            <BlueInput
              id="email-input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor="pass-input">Senha</label>
            <WhiteInput
              id="pass-input"
              type="password"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
            />
          </Inputs>
          {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>{error}</p>}
          {success && <p style={{ color: 'green', textAlign: 'center', marginBottom: '15px' }}>{success}</p>}
          <SaibaButton
            style={{ width: "100%", marginTop: 0 }}
            type="submit"
          >
            Cadastrar
          </SaibaButton>
        </form>
        <Button
          onClick={handleLoginRedirect}
          style={{
            width: '100%',
            maxWidth: '330px',
            marginTop: '10px',
            backgroundColor: 'transparent',
            color: '#4d5fa9',
            border: '1px solid #4d5fa9'
          }}
        >
          Login
        </Button>

      </Container>
    </>
  );
};

export default Registro;