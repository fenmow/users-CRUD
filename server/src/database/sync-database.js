const query = require(".");

async function syncDatabase() {
  await query(`
      CREATE TABLE IF NOT EXISTS "public"."Users" (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  console.log("Created 'Users' table.");
  process.exit(1);
}

syncDatabase();
