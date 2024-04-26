const { Router } = require("express");
const routes = new Router();

routes.get("/health", (require, response) => {
  return response.send({ message: "Connected with success!" });
});

module.exports = routes;

