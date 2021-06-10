const mysql = require("mysql2");
const configMysql = require("../config/db_connect");

const poolMysql = mysql.createPool(configMysql());

process.on("SIGINT", () =>
  poolMysql.end((err) => {
    if (err) return;
    process.exit(0);
  })
);

module.exports = poolMysql;
