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
  padding: 40px 60px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); 
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px; 
  text-align: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  margin-bottom: 20px;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: normal;
  margin-bottom: 8px; 
`;

export const Input = styled.input`
  padding: 12px 15px;
  border: none; 
  border-radius: 8px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  
  background-color: ${props => (props.isPassword ? '#f0f0f0' : '#d2daff')}; 
  
  &:focus {
    outline: none; 
  }
`;

export const Button = styled.button`
  padding: 14px 20px; 
  margin-top: 25px; 
  background-color: #6a6ad9; 
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  width: 100%; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); 
  transition: background-color 0.2s ease; 

  &:hover {
    background-color: #5b5bbd; 
  }

  &:active {
    transform: translateY(1px); 
  }
`;

export const ForgotLink = styled.a`
  font-size: 15px; 
  color: #5555dd; 
  text-decoration: none;
  margin-top: 30px; 
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`;