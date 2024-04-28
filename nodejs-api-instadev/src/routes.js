const { Router } = require("express");
const UserControler = require("./apps/controllers/UserController");

const routes = new Router();

routes.post("/user", UserControler.create);

routes.get("/health", (require, response) => {
  return response.send({ message: "Connected with success!" });
});

module.exports = routes;
