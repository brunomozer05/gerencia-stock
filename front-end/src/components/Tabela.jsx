import React, { useEffect, useState } from "react";
import { Table, Space, Modal, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInputs from "./FormInputs";

const { Column } = Table;

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([]);
  const [deletingUserId, setDeletingUserId] = useState(null);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [userCount, setUserCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080");
        const result = await response.json();
        setData(result);
        const formattedResult = result.map((item) => ({
          ...item,
        }));
        setFormattedData(formattedResult);
        setFilteredData(formattedResult);

        await fetch("http://localhost:8080/count")
          .then((res) => res.json())
          .then((data) => setUserCount(data.count));
      } catch (error) {
        toast.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [isEditModalOpen]);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8080/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetch("http://localhost:8080/count")
          .then((res) => res.json())
          .then((data) => setUserCount(data.count));

        const newData = data.filter((item) => item.id !== userId);
        setData(newData);
        setFormattedData(newData);
        setFilteredData(newData);
        toast.success("Produto excluído com sucesso!");
      } else {
        toast.error("Erro ao excluir Produto");
      }
    } catch (error) {
      toast.error("Erro ao excluir Produto");
    } finally {
      setDeletingUserId(null);
    }
  };

  const handleModalClose = () => {
    setEditModalOpen(false);
    setEditingId(null);
  };

  const showDeleteConfirm = (userId) => {
    Modal.confirm({
      title: "Confirmação",
      content: "Tem certeza de que deseja excluir este Produto?",
      okText: "Sim",
      cancelText: "Cancelar",
      onOk: () => handleDelete(userId),
      onCancel: () => setDeletingUserId(null),
    });
  };

  return (
    <div align="start">
      <div>Total de usuários cadastrados: {userCount}</div>

      <Modal
        title="Editar Dados"
        visible={isEditModalOpen}
        onCancel={handleModalClose}
        footer={null}
      >
        <FormInputs editingId={editingId} onClose={handleModalClose} />
      </Modal>
      <ToastContainer />
      <Table dataSource={filteredData}>
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Nome" dataIndex="nome" key="nome" />
        <Column title="Status" dataIndex="info" key="info" />
        <Column title="Quantidade" dataIndex="quantidade" key="quantidade" />
        <Column
          title="Ação"
          key="action"
          render={(_, record) => (
            <Space size="middle">
              <a
                onClick={() => {
                  setEditModalOpen(true);
                  setEditingId(record.id);
                }}
              >
                Editar
              </a>
              <a onClick={() => showDeleteConfirm(record.id)}>Excluir</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Tabela;
