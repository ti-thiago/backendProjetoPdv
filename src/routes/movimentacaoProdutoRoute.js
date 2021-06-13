const movimentacaoProdutoController = require("../controllers/movimentacaoProduto");

module.exports = (app) => {
  app.post("/movimentacaoProduto", movimentacaoProdutoController.post);
  app.get("/movimentacaoProduto", movimentacaoProdutoController.get);
  app.get("/movimentacaoProduto/:id", movimentacaoProdutoController.get);
  app.put("/movimentacaoProduto/:id", movimentacaoProdutoController.put);
  app.delete("/movimentacaoProduto/:id", movimentacaoProdutoController.delete);
};
