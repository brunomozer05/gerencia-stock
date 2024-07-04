import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./pages/Produtos.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import PageLayout from "./components/PageLayout.jsx";
import Main from "./pages/Main.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Disponibilidade from "./pages/Disponibilidade.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/disponibilidade" element={<Disponibilidade />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
};

export default App;
