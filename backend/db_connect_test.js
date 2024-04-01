const { Pool } = require("pg");
const pool = new Pool({
  user: "yourUsername",
  host: "localhost",
  database: "yourDatabase",
  password: "yourPassword",
  port: 5432,
});

// 데이터베이스 쿼리 예제
async function query(text, params) {
  const res = await pool.query(text, params);
  return res;
}
