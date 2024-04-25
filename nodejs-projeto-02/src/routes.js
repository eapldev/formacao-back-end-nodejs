const { Router } = require("express");
const {
  createUser,
  listUsers,
  listUserDetail,
  deleteUser,
  updateUser,
} = require("./controllers/users");
const verifyToken = require("./middlewares/AuthMiddleware");

const routes = Router();

// cria uma rota get para testar a api
routes.get("/health", (request, response) => {
  return response.status(200).json("Seja bem vindo a minha api...");
});

// cria uma rota get para listar todos os usuários
routes.get("/users", listUsers);

// cria uma rota get para listar um usuário específico
routes.get("/users/:id", listUserDetail);

routes.use(verifyToken);

// cria uma rota post para inserir um novo usuário
routes.post("/users", createUser);

// cria uma rota para deletar um usuário
routes.delete("/users/:id", deleteUser);

// cria uma rota para atualizar um usuário
routes.put("/users/:id", updateUser);

module.exports = routes;
