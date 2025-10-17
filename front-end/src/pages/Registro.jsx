import {
  GlobalStyle,
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
} from "../components/RegistroStyle";

const Registro = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submetendo registro (fiel à imagem)!");
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Registro</Title>
        <form
          onSubmit={handleSubmit}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormGroup>
            <Label htmlFor="usuario">Usuário</Label>
            <Input id="usuario" type="text" required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="senha">Senha</Label>
            <Input id="senha" type="password" required isPassword />
          </FormGroup>

          <Button type="submit">Cadastrar</Button>
        </form>
      </Container>
    </>
  );
};

export default Registro;
