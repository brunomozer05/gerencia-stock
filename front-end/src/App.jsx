import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Produtos from "./pages/Produtos.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import PageLayout from "./components/PageLayout.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route index element={<Produtos/>} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </div>
  );
};
export default App;
