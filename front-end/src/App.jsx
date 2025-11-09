import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Importe Navigate!
import Produtos from "./pages/Produtos.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import PageLayout from "./components/PageLayout.jsx";
import Main from "./pages/Main.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Disponibilidade from "./pages/Disponibilidade.jsx";
import Registro from "./pages/Registro.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main" replace />} />
        <Route path="/main" element={<Main />} /> 
        <Route path="/registro" element={<Registro/>} />
        <Route element={<PageLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="disponibilidade" element={<Disponibilidade />} />
          <Route path="produtos" element={<Produtos />} />
          <Route path="cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;