import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        color: #333;
    }
    h1, h2, h3, h4, h5, h6, p {
        margin: 0;
    }
`;

export const Navbar = styled.div`
  width: 100%;
  height: 80px; 
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const TitleText = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
`;

export const Controller = styled.div`
  display: flex;
  align-items: center;
`;

export const RegisterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 120px;
  height: 40px;
  background-color: #4d5fa9; 
  color: white !important; 
  border-radius: 8px; 
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(77, 95, 169, 0.3);

  &:hover {
    background-color: #3a4b90;
  }
`;


export const Content1 = styled.div`
  display: flex;
  min-height: calc(100vh - 80px); 
  width: 100%;
`;

export const Left1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 100px;
  width: 40%;
  box-sizing: border-box;
`;

export const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 25px;
  line-height: 1.2;
`;

export const Controller2 = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const BaseButton = styled.button`
  cursor: pointer;
  min-width: 140px;
  height: 45px;
  border-radius: 8px;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
`;

export const DuvidaButton = styled(BaseButton)`
  background-color: transparent;
  border: 2px solid #4d5fa9;
  color: #4d5fa9;

  &:hover {
    background-color: #4d5fa9;
    color: white;
  }
`;

export const SaibaButton = styled(BaseButton)`
  background-color: #4d5fa9;
  color: white;
  box-shadow: 0 4px 8px rgba(77, 95, 169, 0.4);

  &:hover {
    background-color: #3a4b90;
    box-shadow: 0 6px 10px rgba(77, 95, 169, 0.5);
  }
`;

export const Right1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ccd5fa;
  padding: 40px;
  box-sizing: border-box;
`;

export const Box = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 30px;
  width: 100%;
  max-width: 350px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 30px;
  font-weight: 600;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  margin-bottom: 30px;
  font-size: 1rem;
  font-weight: 500;
`;

const BaseInput = styled.input`
  padding: 10px 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  height: 45px;
  box-sizing: border-box;
  margin-top: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4d5fa9;
  }
`;

export const BlueInput = styled(BaseInput)`
  background-color: #e6eaff;
  border-color: #c9d2f7;
`;

export const WhiteInput = styled(BaseInput)`
  background-color: white;
`;

export const ForgotPassword = styled.p`
  cursor: pointer;
  color: #4d5fa9;
  font-weight: 500;
  font-size: 0.95rem;
  margin-top: 15px;

  &:hover {
    text-decoration: underline;
  }
`;


export const Content2 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 100px 40px;
  gap: 50px;
`;

export const Left2 = styled.div`
  max-width: 450px;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1.3;
`;

export const Right2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box1 = styled.div`
  background-color: #ccd5fa;
  width: 400px;
  height: 400px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  & img {
    max-width: 100%;
    max-height: 100%;
  }
`;


export const Content3 = styled.div`
  padding: 80px 40px;
  background-color: #f8f9fa;
  text-align: center;
`;

export const Content3Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Square = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

export const FeatureBox = styled.div`
  width: 280px;
  min-height: 250px;
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const Logo1 = styled.img`
  width: 70px;
  height: 70px;
  margin-top: 1rem;
  margin-bottom: 15px;
`;

export const FeatureText = styled.h5`
  font-size: 1.2rem;
  font-weight: 600;
  color: #4d5fa9;
  margin-top: 10px;
`;


export const Bottom = styled.div`
  padding: 40px 40px;
  background-color: #4d5fa9;
  display: flex;
  justify-content: space-evenly;
  gap: 30px;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 150px;
  gap: 8px;
`;

export const BottomTitleText = styled.h4`
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const BottomText = styled.p`
  color: #c9d2f7;
  font-weight: 400;
  font-size: 0.95rem;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  & a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & ${Logo} {
    width: 24px;
    height: 24px;
    filter: invert(100%); 
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
