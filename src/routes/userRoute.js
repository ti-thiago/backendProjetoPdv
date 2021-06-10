const userController = require("../controllers/user");

module.exports = (app) => {
  app.post("/user", userController.post);
  app.get("/user", userController.get);
  app.get("/user/:id", userController.get);
  app.put("/user/:id", userController.put);
  app.delete("/user/:id", userController.delete);
};
