import { db } from "../db.js";

export const getProducts = (_, res) => { 
  const q = "SELECT * FROM produtos;"; 

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const createProduct = (req, res) => {
  const { nome, quantidade, info } = req.body;
  
  const query = `INSERT INTO produtos (nome, quantidade, info) VALUES ('${nome}', '${quantidade}', '${info}') RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const updateProduct = (req, res) => { 
  const { nome, quantidade, info } = req.body;
 
  const query = `UPDATE produtos SET nome = '${nome}', quantidade = '${quantidade}', info = '${info}' WHERE id = ${req.params.id} RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const deleteProduct = (req, res) => { 
  
  const query = `DELETE FROM produtos WHERE id = ${req.params.id}`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json({});
  });
};

export const countProducts = (_, res) => {

  const query = `SELECT COUNT(*) FROM produtos;`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    const count = data.rows[0].count;
    return res.status(200).json({ count });
  });
};