import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #ccd5fa; 
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: Arial, sans-serif;
  }
`;
 
export const Container = styled.div`
  background-color: white;
  padding: 40px 60px; /* Ajustado para a proporção da imagem */
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); 
  width: 100%;
  max-width: 450px; /* Largura ajustada para ser mais fiel à imagem */
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 30px; /* Ajustado para o tamanho na imagem */
  font-weight: bold;
  color: #333; /* Cor mais escura para o título */
  margin-bottom: 40px; /* Espaçamento abaixo do título */
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinha o label à esquerda */
  margin-bottom: 20px; /* Espaçamento entre os grupos de input */
  width: 100%; /* Ocupa a largura total dentro do container */
`;

export const Label = styled.label`
  font-size: 16px; /* Tamanho do texto do label */
  color: #333; /* Cor escura para o label */
  font-weight: normal; /* Menos negrito que na tentativa anterior, mais fiel à imagem */
  margin-bottom: 8px; /* Espaço entre o label e o input */
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: none; /* A imagem parece não ter bordas visíveis */
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  
  /* Cores de fundo dos inputs, baseadas na imagem */
  background-color: ${props => (props.isPassword ? '#f0f0f0' : '#d2daff')}; 
  
  &:focus {
    outline: none; /* Remove o outline padrão */
    /* Poderíamos adicionar um outline sutil se quisermos uma indicação de foco, mas para ser EXATO, removemos */
    /* border: 1px solid #a0a0ff; */ 
    /* background-color: white; */ /* Manter a cor de fundo original no foco para fidelidade */
  }
`;

export const Button = styled.button`
  padding: 14px 20px; /* Mais preenchimento para o botão */
  margin-top: 25px; /* Espaço acima do botão */
  background-color: #6a6ad9; /* Cor roxa exata do botão na imagem */
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 100%; /* Ocupa a largura total */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra sutil no botão */
  transition: background-color 0.2s ease; /* Transição para hover */

  &:hover {
    background-color: #5b5bbd; /* Um pouco mais escuro no hover */
  }

  &:active {
    transform: translateY(1px); /* Pequeno efeito de clique */
  }
`;

export const ForgotLink = styled.a`
  font-size: 15px; /* Tamanho do texto do link */
  color: #5555dd; /* Cor exata do link na imagem */
  text-decoration: none;
  margin-top: 30px; /* Espaço acima do link */
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`;