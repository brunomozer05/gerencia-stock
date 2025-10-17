import {
    GlobalStyle,
    Navbar,
    Title,
    Logo,
    TitleText,
    Controller,
    RegisterLink,
    Content1,
    Left1,
    HeroTitle,
    Right1,
    Box,
    LoginTitle,
    Inputs,
    Controller2,
    DuvidaButton,
    SaibaButton,
    Content2,
    Left2,
    Right2,
    Box1,
    Content3,
    Content3Title,
    Square,
    FeatureBox,
    Logo1,
    FeatureText,
    BlueInput,
    WhiteInput,
    Bottom,
    Info,
    BottomTitleText,
    BottomText,
    ForgotPassword,
    SocialLinks
} from "../components/MainStyle";

const Main = () => {
    return (
        <>
            <GlobalStyle />
            <Navbar>
                <Title>
                    <Logo
                        src="https://github.com/brunomozer05/gerencia-stock/blob/main/front-end/public/icon.png?raw=true"
                        alt="Logo Gerencia Stock"
                    />
                    <TitleText>
                        Gerencia<span style={{ color: "#4d5fa9" }}>Stock</span>
                    </TitleText>
                </Title>
                <Controller>
                    <RegisterLink href="/registro">
                        Registrar
                    </RegisterLink>
                </Controller>
            </Navbar>

            <Content1>
                <Left1>
                    <HeroTitle>
                        Elevando sua Eficiência, <br />
                        <span style={{ color: "#4d5fa9" }}>Maximizando</span> seus <br />
                        Resultados!
                    </HeroTitle>
                    <Controller2>
                        <DuvidaButton>Dúvidas</DuvidaButton>
                        <SaibaButton>Saiba Mais</SaibaButton>
                    </Controller2>
                </Left1>
                <Right1>
                    <Box>
                        <LoginTitle>Login</LoginTitle>
                        <Inputs>
                            <label htmlFor="user-input">Usuário</label>
                            <BlueInput id="user-input" type="text" />
                            
                            <label htmlFor="pass-input">Senha</label>
                            <WhiteInput id="pass-input" type="password" />
                        </Inputs>
                        
                        <a href="/dashboard" style={{ textDecoration: 'none', width: '100%', maxWidth: '200px' }}>
                            <SaibaButton style={{ width: '100%', marginTop: 0 }} type="submit">Entrar</SaibaButton>
                        </a>
                        
                        <ForgotPassword>
                            Esqueceu o seu usuário ou senha?
                        </ForgotPassword>
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
                        <img
                            src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/f52f3b020c5039021257e72186a693ca483ba217/front-end/public/img1.svg"
                            alt="Controle de Estoque"
                        />
                    </Box1>
                </Right2>
            </Content2>

            <Content3>
                <Content3Title>Recursos que impulsionam o seu negócio</Content3Title>
                <Square>
                    <FeatureBox>
                        <Logo1 src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/refs/heads/main/front-end/public/armazem.png" alt="Ícone Armazém"></Logo1>
                        <FeatureText>Gestão Inteligente de estoque</FeatureText>
                    </FeatureBox>
                    <FeatureBox>
                        <Logo1 src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/refs/heads/main/front-end/public/negociacao.png" alt="Ícone Negociação"></Logo1>
                        <FeatureText>Relatórios e Análises</FeatureText>
                    </FeatureBox>
                    <FeatureBox>
                        <Logo1 src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/refs/heads/main/front-end/public/rede-de-conexao.png" alt="Ícone Rede de Conexão"></Logo1>
                        <FeatureText>Acesso de Qualquer Lugar</FeatureText>
                    </FeatureBox>
                </Square>
            </Content3>

            <Bottom>
                <Info>
                    <BottomTitleText>Gerencia Stock</BottomTitleText>
                    <BottomText>Sobre nós</BottomText>
                </Info>
                <Info>
                    <BottomTitleText>Ajuda</BottomTitleText>
                    <BottomText>FAQ</BottomText>
                </Info>
                <Info>
                    <BottomTitleText>Redes Sociais</BottomTitleText>
                    <SocialLinks>
                        <a href="https://github.com/brunomozer05/gerencia-stock" target="_blank" rel="noopener noreferrer">
                            <Logo src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/87736196ced3361ec2ae14509a9334c8519c9b8a/front-end/public/github.svg" alt="Github"></Logo>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Logo src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/87736196ced3361ec2ae14509a9334c8519c9b8a/front-end/public/facebook.svg" alt="Facebook"></Logo>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <Logo src="https://raw.githubusercontent.com/brunomozer05/gerencia-stock/87736196ced3361ec2ae14509a9334c8519c9b8a/front-end/public/x.svg" alt="Twitter/X"></Logo>
                        </a>
                    </SocialLinks>
                </Info>
            </Bottom>
        </>
    );
};

export default Main;