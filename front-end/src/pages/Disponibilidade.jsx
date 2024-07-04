import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import axios from "axios";
import { ResponsiveContainer, PieChart, Pie, Legend, Tooltip } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.info)),
        ];
        const pieChartData = uniqueCategories.map((category, index) => ({
          name: category,
          value: response.data.filter((item) => item.info === category).length,
          info: category,
        }));

        setData(pieChartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ width: "100%", height: 600 }}>
      <ResponsiveContainer>
        <Breadcrumb
          style={{
            display: "flex",
            margin: "4px 0",
            textAlign: "center",
          }}
        >
          <h1>Estado Estoque</h1>
        </Breadcrumb>
        <PieChart>
          <Pie dataKey="value" data={data} fill="#4D5FA9" label />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Dashboard;
