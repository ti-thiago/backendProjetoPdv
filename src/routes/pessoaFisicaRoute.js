const pessoaFisicaController = require("../controllers/pessoaFisica");

module.exports = (app) => {
  app.post("/pessoaFisica", pessoaFisicaController.post);
  app.get("/pessoaFisica", pessoaFisicaController.get);
  app.put("/pessoaFisica/:id", pessoaFisicaController.put);
  app.delete("/pessoaFisica/:id", pessoaFisicaController.delete);
};
