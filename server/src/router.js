const Router = require("express");
const usersController = require("./controllers/users-controller");

const router = Router();

router.get("/users", usersController.index);
router.get("/users/:id", usersController.show);
router.post("/users", usersController.create);
router.put("/users/:id", usersController.update);

module.exports = router;
