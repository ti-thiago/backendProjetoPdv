const { Sequelize } = require("sequelize");
const modelsIndex = require("./modelsIndex");
const config = require("../config/database.js");

const db = {};

const sequelize = new Sequelize(config());

modelsIndex.map((model) => model.init(sequelize));
modelsIndex.map(
  (model) => model.associate && model.associate(sequelize.models)
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
