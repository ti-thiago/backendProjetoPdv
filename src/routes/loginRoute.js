const login = require("../controllers/login");

module.exports = (app) => {
  app.post("/", login.post);
  app.get("/", login.get);
};
