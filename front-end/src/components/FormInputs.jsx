import React from "react";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};

const FormInputs = ({ editingId }) => {
  const [form] = Form.useForm();

  const onFinishCreate = async (values) => {
    try {
      await axios.post("http://localhost:8080/", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      form.resetFields();

      toast.success("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao enviar dados. Por favor, tente novamente.");
    }
  };

  const onFinishUpdate = async (values) => {
    try {
      await axios.put(`http://localhost:8080/${editingId}`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      form.resetFields();

      toast.success("Dados enviados com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      toast.error("Erro ao enviar dados. Por favor, tente novamente.");
    }
  };

  return (
    <div align="start">
      <Form
        {...formItemLayout}
        name="form"
        form={form}
        onFinish={editingId ? onFinishUpdate : onFinishCreate}
        style={{ maxWidth: 600 }}
        scrollToFirstError
      >
        <Form.Item
          name="nome"
          label="Nome do produto"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Por favor coloque Nome do produto!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="quantidade"
          label="Quantidade"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "Por favor coloque quantidade do produto!",
            },
          ]}
        >
          <Input type="number" />

        </Form.Item>
        <Form.Item
          name="info"
          label="Status"
          rules={[{ required: true, message: "Por favor escolha o Status do produto!" }]}
        >
          <Select placeholder="escolha o status do produto">
            <Option value="Dísponivel">Dísponivel</Option>
            <Option value="Indisponível">Indisponível</Option>
            <Option value="Outro">Outro</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default FormInputs;
