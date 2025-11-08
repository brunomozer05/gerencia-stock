import express from "express";
import productRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.js";    
import cors from "cors";
import cookieParser from "cookie-parser"; 

const app = express();

app.use(express.json());
app.use(cookieParser()); 


app.use(cors({ 
  credentials: true, 
  
  origin: "http://localhost:3000" 
}));


app.use("/", productRoutes);    
app.use("/auth", authRoutes); 

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080!");
    console.log("Pronto para receber requisições de autenticação e produtos.");
});