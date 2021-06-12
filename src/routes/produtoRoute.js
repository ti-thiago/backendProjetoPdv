const produtoController = require("../controllers/produto");

module.exports = (app) => {
  app.post("/produtos", produtoController.post);
  app.get("/produtos", produtoController.get);
  app.get("/produtos/:id", produtoController.get);
  app.put("/produtos/:id", produtoController.put);
  app.delete("/produtos/:id", produtoController.delete);
};
