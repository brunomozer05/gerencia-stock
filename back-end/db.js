import pg from "pg";

const { Client } = pg;

export const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234",
  database: "postgres",
});

db.connect();

db.query(`Select * from produtos`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  db.end;
});