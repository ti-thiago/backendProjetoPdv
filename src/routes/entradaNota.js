const entradaNota = require("../controllers/entradaNota");

module.exports = (app) => {
  app.post("entradaNota/", entradaNota.post);
  app.get("/entradaNota", entradaNota.get);
  app.put("/entradaNota:id", entradaNota.put);
  app.delete("/entradaNota:id", entradaNota.delete);
};
