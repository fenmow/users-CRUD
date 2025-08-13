const User = require("../models/User");

module.exports = {
  // GET /users
  index: async (req, res) => {
    const users = await User.getAll();
    res.json(users);
  },

  // POST /users
  create: async (req, res) => {
    const newUser = req.body;
    console.log(newUser);
    res.status(201).json({});
  },

  // GET /users/:id
  show: async (req, res) => {},

  // UPDATE /users/:id
  update: async (req, res) => {},

  // DELETE /users/:id
  delete: async (req, res) => {},
};
