import React from 'react';
import styled from 'styled-components';



export const Navbar = styled.div`
  width: 100%;
  height: 75px;
  box-shadow: 0px -3px 10px #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;
`;

export const Controller = styled.div`
  display: flex;
  margin-right: 5rem;
`;

export const Register = styled.a`
  color: #000000;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 2rem;
  background-color: #f3f3f3;
  border-radius: 15px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.473);
  font-weight: 500;
  font-size: medium;
`;

export const Content1 = styled.div`
  display: flex;
`;

export const Left1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

export const Right1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 92vh;
  background-color: #ccd5fa;
`;

export const Box = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 75%;
  border-radius: 15px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Input = styled.input`
  background-color: ${(props) => (props.className === 'blue' ? '#4d5fa9' : '#F6F6F6')};
  border-radius: 15px;
  border-style: none;
  width: 15rem;
  height: 2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.473);
`;

export const Controller2 = styled.div`
  width: 70%;
  justify-content: space-evenly;
  display: flex;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  border-radius: 15px;
  border: none;
  background-color: ${(props) => (props.className === 'saiba' ? '#4d5fa9' : '#ccd5fa')};
  color: white;
  font-size: larger;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.473);
`;

export const ForgotPassword = styled.p`
  cursor: pointer;
  color: #4d5fa9;
  font-weight: 500;
`;

export const Content2 = styled.div`
  margin-top: 10rem;
  display: flex;
  justify-content: space-evenly;
`;

export const Left2 = styled.div`
  font-size: xx-large;
  font-weight: 700;
  display: flex;
  align-items: center;
`;

export const Right2 = styled.div`
  display: flex;
  align-items: center;
`;

export const Box1 = styled.div`
  background-color: #ccd5fa;
  width: 50rem;
  height: 50rem;
  border-radius: 15px;
`;

export const Content3 = styled.div`
  font-size: xx-large;
  font-weight: 700;
  text-align: center;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
`;

export const Square = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BoxItem = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #ccd5fa;
  border-radius: 15px;
`;

export const Bottom = styled.div``;



const App = () => {
  return (
    <div>
      <Navbar>
        <Title>

          <h1>Gerencia<span style={{ color: '#4d5fa9' }}>Stock</span></h1>
        </Title>
        <Controller>
          <Register href="/pages/register.html">Registrar</Register>
        </Controller>
      </Navbar>
      <Content1>
        <Left1>
          <p>
            Elevando sua Eficiência, <br />
            <span style={{ color: '#4d5fa9' }}>Maximizando</span> seus <br />
            Resultados!
          </p>
          <Controller2>
            <Button className="duvida">Dúvidas</Button>
            <Button className="saiba">Saiba Mais</Button>
          </Controller2>
        </Left1>
        <Right1>
          <Box>
            <h1>Login</h1>
            <Inputs>
              Usuário
              <Input className="blue" type="text" />
              Senha
              <Input className="white" type="password" />
            </Inputs>
            <Button className="saiba" type="submit">Entrar</Button>
            <ForgotPassword>Esqueceu o seu usuário ou senha?</ForgotPassword>
          </Box>
        </Right1>
      </Content1>
      <Content2>
        <Left2>
          Controle total do seu <br />estoque com <br />facilidade e precisão.
        </Left2>
        <Right2>
          <Box1></Box1>
        </Right2>
      </Content2>
      <Content3>
        <p>Saiba Mais</p>
        <Square>
          <BoxItem className="left3"></BoxItem>
          <BoxItem className="mid3"></BoxItem>
          <BoxItem className="right3"></BoxItem>
        </Square>
      </Content3>
      <Bottom></Bottom>
    </div>
  );
};

export default App;
