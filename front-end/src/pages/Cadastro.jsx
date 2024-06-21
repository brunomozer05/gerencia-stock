import React from "react";
import { Breadcrumb } from "antd";
import FormInputs from "../components/FormInputs";

const Cadastro = () => {
  return (
    <>
      {" "}
      <Breadcrumb
        style={{
          display: "flex",
          margin: "4px 0",
          textAlign: "center",
        }}
      >
        <h1>Cadastros de produtos</h1>
      </Breadcrumb>
      <div>
        <FormInputs />
      </div>
    </>
  );
};
export default Cadastro;
