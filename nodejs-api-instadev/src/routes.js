const { Router } = require("express");
const { upload } = require("./configs/multer");
const schemaValidator = require("./apps/middlewares/schemaValidator");

const AuthenticationMiddleware = require("./apps/middlewares/authentication");

const AuthenticationController = require("./apps/controllers/AuthenticationController");
const authSchema = require("./schema/auth.schema.json");

const UserControler = require("./apps/controllers/UserController");
const userSchema = require("./schema/create.user.schema.json");

const FileController = require("./apps/controllers/FileController");

const PostController = require("./apps/controllers/PostController");
const postSchema = require("./schema/post.schema.json");

const routes = new Router();

routes.post("/user", schemaValidator(userSchema), UserControler.create);

routes.post(
  "/auth",
  schemaValidator(authSchema),
  AuthenticationController.authenticate
);

routes.get("/health", (require, response) => {
  return response.send({ message: "Connected with success!" });
});

routes.use(AuthenticationMiddleware);

routes.put("/user", UserControler.update);
routes.delete("/user", UserControler.delete);
routes.get("/user", UserControler.userProfile);

routes.post("/upload", upload.single("image"), FileController.upload);

routes.post("/posts", schemaValidator(postSchema), PostController.create);
routes.delete("/posts/:id", PostController.delete);
routes.put("/posts/:id", PostController.update);
routes.get("/posts", PostController.listAllPosts);

routes.put("/posts/add-like/:id", PostController.addLike);
routes.get("/posts/my-posts", PostController.listMyPosts);

module.exports = routes;
