import { db } from "../db.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = "Aa123AA";

export const signup = async (req, res) => {
  const { nome, email, senha } = req.body;

  const checkQuery = "SELECT * FROM usuarios WHERE email = $1";
  try {
    const checkRes = await db.query(checkQuery, [email]);
    if (checkRes.rows.length > 0) {
      return res.status(409).json("Usuário com este email já existe!");
    }
  } catch (err) {
    console.error("Erro no DB ao verificar email:", err.message);
    return res.status(500).json("Erro interno do servidor ao verificar usuário.");
  }

  const insertQuery = "INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING id, nome, email";
  const values = [nome, email, senha];

  try {
    const insertRes = await db.query(insertQuery, values);
    const user = insertRes.rows[0];
    
    return res.status(201).json({
        id: user.id,
        nome: user.nome,
        email: user.email,
        message: "Usuário registrado com sucesso!"
    });
  } catch (err) {
    console.error("Erro no DB ao inserir usuário:", err.message);
    return res.status(500).json("Erro interno do servidor ao registrar usuário.");
  }
};

export const signin = async (req, res) => {
  const { email, senha } = req.body;

  const query = "SELECT id, nome, email, senha FROM usuarios WHERE email = $1";
  try {
    const resDB = await db.query(query, [email]);

    if (resDB.rows.length === 0) {
      return res.status(401).json("Credenciais inválidas. Email não encontrado.");
    }
    
    const user = resDB.rows[0];

    const isPasswordCorrect = (senha === user.senha);
    
    if (!isPasswordCorrect) {
      return res.status(401).json("Credenciais inválidas. Senha incorreta.");
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    const { senha: _, ...userInfo } = user; 

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production" ? true : false, 
        maxAge: 3600000 
      })
      .status(200)
      .json(userInfo);
      
  } catch (err) {
    console.error("Erro no login:", err.message);
    return res.status(500).json("Erro interno do servidor no processo de login.");
  }
};

export const logout = (_, res) => {
  return res
    .clearCookie("access_token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false,
      sameSite: "strict", 
    })
    .status(200)
    .json("Logout efetuado com sucesso!");
};