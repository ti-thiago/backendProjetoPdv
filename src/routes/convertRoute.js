const convertController = require("../controllers/convert");

module.exports = (app) => {
  app.post("convertController/", convertController.post);
  app.get("/convertController", convertController.get);
  app.put("/convertController:id", convertController.put);
  app.delete("/convertController:id", convertController.delete);
};
