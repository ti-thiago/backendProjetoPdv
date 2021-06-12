const consign = require("consign");

const express = require("express");

require("./models/index");

const app = express();

const cors = require("cors");

// Rotas

app.use(express.json({ limit: "12mb" }));
app.use(cors());
app.use(require("body-parser").urlencoded({ extended: false }));

consign({
  locale: "pt-br",
})
  .include("./src/routes")
  .into(app);

module.exports = app;
