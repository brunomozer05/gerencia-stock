import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  height: 75px;
  box-shadow: 1px -3px 10px #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
`;

export const TitleText = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-left: 10px;
`;

export const Controller = styled.div`
  display: flex;
  margin-right: 5rem;
`;

export const RegisterLink = styled.a`
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
  box-shadow: 0px 0px 0px 0px #000000;
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
  margin-top: 6rem;
  margin-bottom: 7rem;
`;

export const Controller2 = styled.div`
  width: 70%;
  justify-content: space-evenly;
  display: flex;
`;

export const DuvidaButton = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  border-radius: 15px;
  border: none;
  background-color: #ccd5fa;
  color: white;
  font-size: larger;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.473);
`;

export const SaibaButton = styled.button`
  cursor: pointer;
  width: 8rem;
  height: 3rem;
  border-radius: 15px;
  border: none;
  background-color: #4d5fa9;
  color: white;
  font-size: larger;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.473);
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

export const Left3 = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #ccd5fa;
  border-radius: 15px;
`;

export const Mid3 = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #ccd5fa;
  border-radius: 15px;
`;

export const Right3 = styled.div`
  width: 20rem;
  height: 20rem;
  background-color: #ccd5fa;
  border-radius: 15px;
`;

export const BlueInput = styled.input`
  background-color: #4d5fa9;
  border-radius: 15px;
  border-style: none;
  width: 15rem;
  height: 2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.473);
`;

export const WhiteInput = styled.input`
  background-color: #f6f6f6;
  border-radius: 15px;
  border-style: none;
  width: 15rem;
  height: 2rem;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.473);
`;

export const Bottom = styled.div`
  margin-top: 10rem;
  padding: 5rem;
  font-weight: 600;
  font-size: large;
  text-align: center;
  height: 10rem;
  background-color: #4d5fa9;
`;
