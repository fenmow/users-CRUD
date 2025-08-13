const query = require("../database");

class User {
  constructor(user) {
    (this.id = user.id),
      (this.name = user.name),
      (this.emal = user.email),
      (this.createdAt = new Date(user.created_at)),
      (this.updatedAt = new Date(user.updated_at));
  }

  static async getAll() {
    const users = await query(`SELECT * FROM "Users";`);
    if (users.rows.length === 0) return null;
    return users.rows.map((row) => new User(row));
  }

  static async create({ name, email }) {
    const newUser = await query(
      `
      INSERT INTO "Users" (name, email) VALUES ($1, $2) RETURNING *;
      `,
      [name, email]
    );
    return new User(newUser);
  }
}

module.exports = User;
