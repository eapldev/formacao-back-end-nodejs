const { Router } = require("express");
const UserController = require("./controllers/UserController");
const routes = Router();

routes.get("/health", (req, res) => {
  return res.send({ message: "Server is On..." });
});

routes.post("/users", UserController.insertUser);
routes.get("/users", UserController.selectUsers);

module.exports = routes;
