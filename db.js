const { Pool } = require('pg');
const db = new Pool({
  user: "postgres",
  host: "127.0.0.1",
  password: "jr111***",
  port: 5432,
  database: "photos",
});

module.exports = db;
