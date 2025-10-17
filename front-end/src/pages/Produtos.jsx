import { Breadcrumb } from "antd";
import Tabela from "../components/Tabela";

const Produtos = () => {
  return (
    <>
      <Breadcrumb
        style={{
          display: "flex",
          margin: "4px 0",
          textAlign: "center",
        }}
      >
        <h1>Tabela de produtos</h1>
      </Breadcrumb>
      <Tabela />
    </>
  );
};
export default Produtos;
