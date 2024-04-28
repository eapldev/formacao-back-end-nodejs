const { Router } = require("express");
const schemaValidator = require("./apps/middlewares/schemaValidator");

const AuthenticationMiddleware = require("./apps/middlewares/authentication");

const AuthenticationController = require("./apps/controllers/AuthenticationController");
const authSchema = require("./schema/auth.schema.json");

const UserControler = require("./apps/controllers/UserController");
const userSchema = require("./schema/create.user.schema.json");

const routes = new Router();

routes.post("/user", schemaValidator(userSchema), UserControler.create);

routes.post("/auth",schemaValidator(authSchema), AuthenticationController.authenticate);


routes.get("/health", (require, response) => {
  return response.send({ message: "Connected with success!" });
});

routes.use(AuthenticationMiddleware);

module.exports = routes;
