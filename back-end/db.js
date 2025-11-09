import pg from "pg";
const { Client } = pg;

const connectionString = "postgresql://gs_user:DqjlvRp6jOa4TmaJ2MbpaZYu6ouJcmiL@dpg-d479q3qli9vc738itqh0-a.virginia-postgres.render.com/gerenciastock"; 

export const db = new Client({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});

db.connect()
  .then(() => console.log('Conexão com o Banco de Dados estabelecida com sucesso.'))
  .catch(err => console.error('Erro ao conectar ao DB:', err.message));

db.query(`Select * from produtos`, (err, res) => {
  if (!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  db.end;
});