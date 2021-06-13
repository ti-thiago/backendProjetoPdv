const pessoaJuridicaController = require("../controllers/pessoaJuridica");

module.exports = (app) => {
  app.post("/pessoaJuridica", pessoaJuridicaController.post);
  app.get("/pessoaJuridica", pessoaJuridicaController.get);
  app.get("/pessoaJuridica/:id", pessoaJuridicaController.get);
  app.put("/pessoaJuridica/:id", pessoaJuridicaController.put);
  app.delete("/pessoaJuridica/:id", pessoaJuridicaController.delete);
};
