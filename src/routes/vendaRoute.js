const vendaController = require("../controllers/venda");

module.exports = (app) => {
  app.post("/venda", vendaController.post);
  app.get("/venda", vendaController.get);
  app.get("/venda/:id", vendaController.get);
  app.put("/venda/:id", vendaController.put);
  app.delete("/venda/:id", vendaController.delete);
};
