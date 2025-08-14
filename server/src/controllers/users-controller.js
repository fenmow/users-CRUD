const User = require("../models/User");

module.exports = {
  // GET /users
  index: async (req, res) => {
    const users = await User.getAll();
    console.log(users);
    res.json(users);
  },

  // POST /users
  create: async (req, res) => {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  },

  // GET /users/:id
  show: async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).json({ message: "User not found." });
    res.status(200).json(user);
  },

  // UPDATE /users/:id
  update: async (req, res) => {
    const updatedUser = await User.update(req.params.id, req.body);
    res.status(200).json(updatedUser);
  },

  // DELETE /users/:id
  delete: async (req, res) => {
    const { id } = req.params;
    const deletedUser = await User.delete(id);
    res.json(deletedUser);
  },
};
