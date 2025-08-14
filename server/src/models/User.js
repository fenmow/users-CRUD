const query = require("../database");

class User {
  constructor(user) {
    (this.id = user.id),
      (this.name = user.name),
      (this.email = user.email),
      (this.createdAt = new Date(user.created_at)),
      (this.updatedAt = new Date(user.updated_at));
  }

  static async getAll() {
    const users = await query(`SELECT * FROM "Users" ORDER BY id;`);
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

  static async findById(id) {
    const user = await query(`SELECT * FROM "Users" WHERE id = $1;`, [id]);
    if (!user.rows[0]) return null;
    return new User(user.rows[0]);
  }

  static async update(id, attributes) {
    const user = await this.findById(id);
    if (!user) return null;
    Object.assign(user, attributes, { updatedAt: new Date() });

    await query(
      `
        UPDATE "Users" SET
        name = $1,
        email = $2,
        updated_at = CURRENT_TIMESTAMP
        WHERE id = $3;
      `,
      [user.name, user.email, user.id]
    );

    return user;
  }
}

module.exports = User;
