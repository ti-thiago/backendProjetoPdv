const entradaNotaController = require("../controllers/entradaNota");

module.exports = (app) => {
  app.post("/entradaNota/", entradaNotaController.post);
  app.get("/entradaNota", entradaNotaController.get);
  app.get("/entradaNota/:id", entradaNotaController.get);
  app.put("/entradaNota/:id", entradaNotaController.put);
  app.delete("/entradaNota/:id", entradaNotaController.delete);
};
