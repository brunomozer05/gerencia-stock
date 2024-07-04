import React, { useState } from "react";
import {
  IdcardOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";

const items = [
  {
    icon: <BarChartOutlined />,
    label: "Dashboard",
    key: "1",
    target: "/dashboard",
  },
  {
    icon: <TeamOutlined />,
    label: "Estado do Estoque",
    key: "2",
    target: "/disponibilidade",
  },
  {
    icon: <TeamOutlined />,
    label: "Estoque",
    key: "3",
    target: "/produtos",
  },
  {
    icon: <IdcardOutlined />,
    label: "Cadastro",
    key: "4",
    target: "/cadastro",
  },
];

const { Header, Content, Footer, Sider } = Layout;

const PageLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    const { target } = items.find((item) => item.key === key) || {};
    if (target) {
      navigate(target);
    }
  };

  return (
    <Layout
      align="center"
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <img
          src="https://github.com/brunomozer05/gerencia-stock/blob/main/front-end/public/icon.png?raw=true"
          width={70}
          style={{ marginLeft: "3px" }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          onClick={handleMenuClick}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        ></Footer>
      </Layout>
    </Layout>
  );
};
export default PageLayout;
