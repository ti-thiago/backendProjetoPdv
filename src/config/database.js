require("dotenv").config();

module.exports = function db() {
  const connect = {
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DBDATABASE,
    host: process.env.DBHOST,
    dialect: "mysql",
    dialectOptions: {
      decimalNumbers: true,
      multipleStatements: true,
    },
    timezone: "-03:00",
    pool: {
      max: parseInt(process.env.DBPOOLMAX, 10),
      min: 0,
      idle: 1800000,
    },
    define: {
      timestamps: false,
    },
    logging: false,
  };
  return connect;
};
