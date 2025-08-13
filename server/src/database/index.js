const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:lucas170105@localhost:5432/users_crud",
});

async function query(queryString, params, callback) {
  return pool.query(queryString, params, callback);
}

module.exports = query;
